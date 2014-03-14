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
        "word": "tablestorage"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions wrapping the Azure REST API web methods.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.TableStorage.API",
          "name": "API",
          "package": "tablestorage",
          "source": "src/Network-TableStorage-API.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides functions wrapping the Azure REST API web methods",
          "hierarchy": "Network TableStorage API",
          "module": "Network.TableStorage.API",
          "name": "API",
          "package": "tablestorage",
          "partial": "API",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-API.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new table with the specified name or returns an error message\n\u003c/p\u003e",
          "module": "Network.TableStorage.API",
          "name": "createTable",
          "package": "tablestorage",
          "signature": "String -\u003e TableStorage ()",
          "source": "src/Network-TableStorage-API.html#createTable",
          "type": "function"
        },
        "index": {
          "description": "Creates new table with the specified name or returns an error message",
          "hierarchy": "Network TableStorage API",
          "module": "Network.TableStorage.API",
          "name": "createTable",
          "normalized": "String-\u003eTableStorage()",
          "package": "tablestorage",
          "partial": "Table",
          "signature": "String-\u003eTableStorage()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-API.html#v:createTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new table with the specified name if it does not already exist, or returns an erro message\n\u003c/p\u003e",
          "module": "Network.TableStorage.API",
          "name": "createTableIfNecessary",
          "package": "tablestorage",
          "signature": "String -\u003e TableStorage ()",
          "source": "src/Network-TableStorage-API.html#createTableIfNecessary",
          "type": "function"
        },
        "index": {
          "description": "Creates new table with the specified name if it does not already exist or returns an erro message",
          "hierarchy": "Network TableStorage API",
          "module": "Network.TableStorage.API",
          "name": "createTableIfNecessary",
          "normalized": "String-\u003eTableStorage()",
          "package": "tablestorage",
          "partial": "Table If Necessary",
          "signature": "String-\u003eTableStorage()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-API.html#v:createTableIfNecessary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs an Account with the default values for Port and Resource Prefix\n\u003c/p\u003e",
          "module": "Network.TableStorage.API",
          "name": "defaultAccount",
          "package": "tablestorage",
          "signature": "AccountKey -\u003e String -\u003e String -\u003e Account",
          "source": "src/Network-TableStorage-API.html#defaultAccount",
          "type": "function"
        },
        "index": {
          "description": "Constructs an Account with the default values for Port and Resource Prefix",
          "hierarchy": "Network TableStorage API",
          "module": "Network.TableStorage.API",
          "name": "defaultAccount",
          "normalized": "AccountKey-\u003eString-\u003eString-\u003eAccount",
          "package": "tablestorage",
          "partial": "Account",
          "signature": "AccountKey-\u003eString-\u003eString-\u003eAccount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-API.html#v:defaultAccount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.API",
          "name": "defaultConf",
          "package": "tablestorage",
          "signature": "AccountKey -\u003e String -\u003e String -\u003e TableConf",
          "source": "src/Network-TableStorage-API.html#defaultConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage API",
          "module": "Network.TableStorage.API",
          "name": "defaultConf",
          "normalized": "AccountKey-\u003eString-\u003eString-\u003eTableConf",
          "package": "tablestorage",
          "partial": "Conf",
          "signature": "AccountKey-\u003eString-\u003eString-\u003eTableConf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-API.html#v:defaultConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty query with no filters and no specified page size\n\u003c/p\u003e",
          "module": "Network.TableStorage.API",
          "name": "defaultEntityQuery",
          "package": "tablestorage",
          "signature": "EntityQuery",
          "source": "src/Network-TableStorage-API.html#defaultEntityQuery",
          "type": "function"
        },
        "index": {
          "description": "An empty query with no filters and no specified page size",
          "hierarchy": "Network TableStorage API",
          "module": "Network.TableStorage.API",
          "name": "defaultEntityQuery",
          "package": "tablestorage",
          "partial": "Entity Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-API.html#v:defaultEntityQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeletes the entity with the specified key or returns an error message\n\u003c/p\u003e",
          "module": "Network.TableStorage.API",
          "name": "deleteEntity",
          "package": "tablestorage",
          "signature": "String -\u003e EntityKey -\u003e TableStorage ()",
          "source": "src/Network-TableStorage-API.html#deleteEntity",
          "type": "function"
        },
        "index": {
          "description": "Deletes the entity with the specified key or returns an error message",
          "hierarchy": "Network TableStorage API",
          "module": "Network.TableStorage.API",
          "name": "deleteEntity",
          "normalized": "String-\u003eEntityKey-\u003eTableStorage()",
          "package": "tablestorage",
          "partial": "Entity",
          "signature": "String-\u003eEntityKey-\u003eTableStorage()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-API.html#v:deleteEntity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeletes the table with the specified name or returns an error message\n\u003c/p\u003e",
          "module": "Network.TableStorage.API",
          "name": "deleteTable",
          "package": "tablestorage",
          "signature": "String -\u003e TableStorage ()",
          "source": "src/Network-TableStorage-API.html#deleteTable",
          "type": "function"
        },
        "index": {
          "description": "Deletes the table with the specified name or returns an error message",
          "hierarchy": "Network TableStorage API",
          "module": "Network.TableStorage.API",
          "name": "deleteTable",
          "normalized": "String-\u003eTableStorage()",
          "package": "tablestorage",
          "partial": "Table",
          "signature": "String-\u003eTableStorage()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-API.html#v:deleteTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts an entity into the table with the specified name or returns an error message\n\u003c/p\u003e",
          "module": "Network.TableStorage.API",
          "name": "insertEntity",
          "package": "tablestorage",
          "signature": "String -\u003e Entity -\u003e TableStorage ()",
          "source": "src/Network-TableStorage-API.html#insertEntity",
          "type": "function"
        },
        "index": {
          "description": "Inserts an entity into the table with the specified name or returns an error message",
          "hierarchy": "Network TableStorage API",
          "module": "Network.TableStorage.API",
          "name": "insertEntity",
          "normalized": "String-\u003eEntity-\u003eTableStorage()",
          "package": "tablestorage",
          "partial": "Entity",
          "signature": "String-\u003eEntity-\u003eTableStorage()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-API.html#v:insertEntity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerges the specified entity (without removing columns) or returns an error message\n\u003c/p\u003e",
          "module": "Network.TableStorage.API",
          "name": "mergeEntity",
          "package": "tablestorage",
          "signature": "String -\u003e Entity -\u003e TableStorage ()",
          "source": "src/Network-TableStorage-API.html#mergeEntity",
          "type": "function"
        },
        "index": {
          "description": "Merges the specified entity without removing columns or returns an error message",
          "hierarchy": "Network TableStorage API",
          "module": "Network.TableStorage.API",
          "name": "mergeEntity",
          "normalized": "String-\u003eEntity-\u003eTableStorage()",
          "package": "tablestorage",
          "partial": "Entity",
          "signature": "String-\u003eEntity-\u003eTableStorage()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-API.html#v:mergeEntity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a collection of entities by executing the specified query or returns an error message\n\u003c/p\u003e",
          "module": "Network.TableStorage.API",
          "name": "queryEntities",
          "package": "tablestorage",
          "signature": "String -\u003e EntityQuery -\u003e TableStorage [Entity]",
          "source": "src/Network-TableStorage-API.html#queryEntities",
          "type": "function"
        },
        "index": {
          "description": "Returns collection of entities by executing the specified query or returns an error message",
          "hierarchy": "Network TableStorage API",
          "module": "Network.TableStorage.API",
          "name": "queryEntities",
          "normalized": "String-\u003eEntityQuery-\u003eTableStorage[Entity]",
          "package": "tablestorage",
          "partial": "Entities",
          "signature": "String-\u003eEntityQuery-\u003eTableStorage[Entity]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-API.html#v:queryEntities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the entity with the specified table name and key or an error message\n\u003c/p\u003e",
          "module": "Network.TableStorage.API",
          "name": "queryEntity",
          "package": "tablestorage",
          "signature": "String -\u003e EntityKey -\u003e TableStorage Entity",
          "source": "src/Network-TableStorage-API.html#queryEntity",
          "type": "function"
        },
        "index": {
          "description": "Returns the entity with the specified table name and key or an error message",
          "hierarchy": "Network TableStorage API",
          "module": "Network.TableStorage.API",
          "name": "queryEntity",
          "normalized": "String-\u003eEntityKey-\u003eTableStorage Entity",
          "package": "tablestorage",
          "partial": "Entity",
          "signature": "String-\u003eEntityKey-\u003eTableStorage Entity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-API.html#v:queryEntity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList the names of tables for an account or returns an error message\n\u003c/p\u003e",
          "module": "Network.TableStorage.API",
          "name": "queryTables",
          "package": "tablestorage",
          "signature": "TableStorage [String]",
          "source": "src/Network-TableStorage-API.html#queryTables",
          "type": "function"
        },
        "index": {
          "description": "List the names of tables for an account or returns an error message",
          "hierarchy": "Network TableStorage API",
          "module": "Network.TableStorage.API",
          "name": "queryTables",
          "normalized": "TableStorage[String]",
          "package": "tablestorage",
          "partial": "Tables",
          "signature": "TableStorage[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-API.html#v:queryTables"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdates the specified entity (possibly removing columns) or returns an error message\n\u003c/p\u003e",
          "module": "Network.TableStorage.API",
          "name": "updateEntity",
          "package": "tablestorage",
          "signature": "String -\u003e Entity -\u003e TableStorage ()",
          "source": "src/Network-TableStorage-API.html#updateEntity",
          "type": "function"
        },
        "index": {
          "description": "Updates the specified entity possibly removing columns or returns an error message",
          "hierarchy": "Network TableStorage API",
          "module": "Network.TableStorage.API",
          "name": "updateEntity",
          "normalized": "String-\u003eEntity-\u003eTableStorage()",
          "package": "tablestorage",
          "partial": "Entity",
          "signature": "String-\u003eEntity-\u003eTableStorage()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-API.html#v:updateEntity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns TableStorage actions given a configuration\n\u003c/p\u003e",
          "module": "Network.TableStorage.API",
          "name": "withTableStorage",
          "package": "tablestorage",
          "signature": "TableConf -\u003e TableStorage a -\u003e IO (Either TableError a)",
          "source": "src/Network-TableStorage-API.html#withTableStorage",
          "type": "function"
        },
        "index": {
          "description": "Runs TableStorage actions given configuration",
          "hierarchy": "Network TableStorage API",
          "module": "Network.TableStorage.API",
          "name": "withTableStorage",
          "normalized": "TableConf-\u003eTableStorage a-\u003eIO(Either TableError a)",
          "package": "tablestorage",
          "partial": "Table Storage",
          "signature": "TableConf-\u003eTableStorage a-\u003eIO(Either TableError a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-API.html#v:withTableStorage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions to create authenticated requests to the Table\n Storage REST API.\n\u003c/p\u003e\u003cp\u003eFunctions are provided to create Shared Key authorization tokens, and to add the\n required headers for the various requests.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.TableStorage.Auth",
          "name": "Auth",
          "package": "tablestorage",
          "source": "src/Network-TableStorage-Auth.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides functions to create authenticated requests to the Table Storage REST API Functions are provided to create Shared Key authorization tokens and to add the required headers for the various requests",
          "hierarchy": "Network TableStorage Auth",
          "module": "Network.TableStorage.Auth",
          "name": "Auth",
          "package": "tablestorage",
          "partial": "Auth",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Auth.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates and executes an authenticated request including the Authorization header.\n\u003c/p\u003e\u003cp\u003eThe function takes the account information, request method, additional headers,\n resource, canonicalized resource and request body as parameters, and returns\n an error message or the response object.\n\u003c/p\u003e",
          "module": "Network.TableStorage.Auth",
          "name": "authenticatedRequest",
          "package": "tablestorage",
          "signature": "Method -\u003e [Header] -\u003e String -\u003e String -\u003e String -\u003e TableStorage QueryResponse",
          "source": "src/Network-TableStorage-Auth.html#authenticatedRequest",
          "type": "function"
        },
        "index": {
          "description": "Creates and executes an authenticated request including the Authorization header The function takes the account information request method additional headers resource canonicalized resource and request body as parameters and returns an error message or the response object",
          "hierarchy": "Network TableStorage Auth",
          "module": "Network.TableStorage.Auth",
          "name": "authenticatedRequest",
          "normalized": "Method-\u003e[Header]-\u003eString-\u003eString-\u003eString-\u003eTableStorage QueryResponse",
          "package": "tablestorage",
          "partial": "Request",
          "signature": "Method-\u003e[Header]-\u003eString-\u003eString-\u003eString-\u003eTableStorage QueryResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Auth.html#v:authenticatedRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains constants for working with the storage emulator.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.TableStorage.Development",
          "name": "Development",
          "package": "tablestorage",
          "source": "src/Network-TableStorage-Development.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains constants for working with the storage emulator",
          "hierarchy": "Network TableStorage Development",
          "module": "Network.TableStorage.Development",
          "name": "Development",
          "package": "tablestorage",
          "partial": "Development",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Development.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn account for the storage emulator\n\u003c/p\u003e",
          "module": "Network.TableStorage.Development",
          "name": "developmentAccount",
          "package": "tablestorage",
          "signature": "Account",
          "source": "src/Network-TableStorage-Development.html#developmentAccount",
          "type": "function"
        },
        "index": {
          "description": "An account for the storage emulator",
          "hierarchy": "Network TableStorage Development",
          "module": "Network.TableStorage.Development",
          "name": "developmentAccount",
          "package": "tablestorage",
          "partial": "Account",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Development.html#v:developmentAccount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Development",
          "name": "developmentConf",
          "package": "tablestorage",
          "signature": "TableConf",
          "source": "src/Network-TableStorage-Development.html#developmentConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Development",
          "module": "Network.TableStorage.Development",
          "name": "developmentConf",
          "package": "tablestorage",
          "partial": "Conf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Development.html#v:developmentConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains functions which help when unmarshalling query responses\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.TableStorage.Query",
          "name": "Query",
          "package": "tablestorage",
          "source": "src/Network-TableStorage-Query.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains functions which help when unmarshalling query responses",
          "hierarchy": "Network TableStorage Query",
          "module": "Network.TableStorage.Query",
          "name": "Query",
          "package": "tablestorage",
          "partial": "Query",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Query.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the value in a binary-valued column or return Nothing if no such column exists\n\u003c/p\u003e",
          "module": "Network.TableStorage.Query",
          "name": "edmBinary",
          "package": "tablestorage",
          "signature": "String -\u003e Entity -\u003e Maybe String",
          "source": "src/Network-TableStorage-Query.html#edmBinary",
          "type": "function"
        },
        "index": {
          "description": "Find the value in binary-valued column or return Nothing if no such column exists",
          "hierarchy": "Network TableStorage Query",
          "module": "Network.TableStorage.Query",
          "name": "edmBinary",
          "normalized": "String-\u003eEntity-\u003eMaybe String",
          "package": "tablestorage",
          "partial": "Binary",
          "signature": "String-\u003eEntity-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Query.html#v:edmBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the value in a boolean-valued column or return Nothing if no such column exists\n\u003c/p\u003e",
          "module": "Network.TableStorage.Query",
          "name": "edmBoolean",
          "package": "tablestorage",
          "signature": "String -\u003e Entity -\u003e Maybe Bool",
          "source": "src/Network-TableStorage-Query.html#edmBoolean",
          "type": "function"
        },
        "index": {
          "description": "Find the value in boolean-valued column or return Nothing if no such column exists",
          "hierarchy": "Network TableStorage Query",
          "module": "Network.TableStorage.Query",
          "name": "edmBoolean",
          "normalized": "String-\u003eEntity-\u003eMaybe Bool",
          "package": "tablestorage",
          "partial": "Boolean",
          "signature": "String-\u003eEntity-\u003eMaybe Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Query.html#v:edmBoolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the value in a date-valued column or return Nothing if no such column exists\n\u003c/p\u003e",
          "module": "Network.TableStorage.Query",
          "name": "edmDateTime",
          "package": "tablestorage",
          "signature": "String -\u003e Entity -\u003e Maybe UTCTime",
          "source": "src/Network-TableStorage-Query.html#edmDateTime",
          "type": "function"
        },
        "index": {
          "description": "Find the value in date-valued column or return Nothing if no such column exists",
          "hierarchy": "Network TableStorage Query",
          "module": "Network.TableStorage.Query",
          "name": "edmDateTime",
          "normalized": "String-\u003eEntity-\u003eMaybe UTCTime",
          "package": "tablestorage",
          "partial": "Date Time",
          "signature": "String-\u003eEntity-\u003eMaybe UTCTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Query.html#v:edmDateTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the value in a double-valued column or return Nothing if no such column exists\n\u003c/p\u003e",
          "module": "Network.TableStorage.Query",
          "name": "edmDouble",
          "package": "tablestorage",
          "signature": "String -\u003e Entity -\u003e Maybe Double",
          "source": "src/Network-TableStorage-Query.html#edmDouble",
          "type": "function"
        },
        "index": {
          "description": "Find the value in double-valued column or return Nothing if no such column exists",
          "hierarchy": "Network TableStorage Query",
          "module": "Network.TableStorage.Query",
          "name": "edmDouble",
          "normalized": "String-\u003eEntity-\u003eMaybe Double",
          "package": "tablestorage",
          "partial": "Double",
          "signature": "String-\u003eEntity-\u003eMaybe Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Query.html#v:edmDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the value in a Guid-valued column or return Nothing if no such column exists\n\u003c/p\u003e",
          "module": "Network.TableStorage.Query",
          "name": "edmGuid",
          "package": "tablestorage",
          "signature": "String -\u003e Entity -\u003e Maybe String",
          "source": "src/Network-TableStorage-Query.html#edmGuid",
          "type": "function"
        },
        "index": {
          "description": "Find the value in Guid-valued column or return Nothing if no such column exists",
          "hierarchy": "Network TableStorage Query",
          "module": "Network.TableStorage.Query",
          "name": "edmGuid",
          "normalized": "String-\u003eEntity-\u003eMaybe String",
          "package": "tablestorage",
          "partial": "Guid",
          "signature": "String-\u003eEntity-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Query.html#v:edmGuid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the value in an integer-valued column or return Nothing if no such column exists\n\u003c/p\u003e",
          "module": "Network.TableStorage.Query",
          "name": "edmInt32",
          "package": "tablestorage",
          "signature": "String -\u003e Entity -\u003e Maybe Int",
          "source": "src/Network-TableStorage-Query.html#edmInt32",
          "type": "function"
        },
        "index": {
          "description": "Find the value in an integer-valued column or return Nothing if no such column exists",
          "hierarchy": "Network TableStorage Query",
          "module": "Network.TableStorage.Query",
          "name": "edmInt32",
          "normalized": "String-\u003eEntity-\u003eMaybe Int",
          "package": "tablestorage",
          "partial": "Int",
          "signature": "String-\u003eEntity-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Query.html#v:edmInt32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the value in an integer-valued column or return Nothing if no such column exists\n\u003c/p\u003e",
          "module": "Network.TableStorage.Query",
          "name": "edmInt64",
          "package": "tablestorage",
          "signature": "String -\u003e Entity -\u003e Maybe Int",
          "source": "src/Network-TableStorage-Query.html#edmInt64",
          "type": "function"
        },
        "index": {
          "description": "Find the value in an integer-valued column or return Nothing if no such column exists",
          "hierarchy": "Network TableStorage Query",
          "module": "Network.TableStorage.Query",
          "name": "edmInt64",
          "normalized": "String-\u003eEntity-\u003eMaybe Int",
          "package": "tablestorage",
          "partial": "Int",
          "signature": "String-\u003eEntity-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Query.html#v:edmInt64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the value in a string-valued column or return Nothing if no such column exists\n\u003c/p\u003e",
          "module": "Network.TableStorage.Query",
          "name": "edmString",
          "package": "tablestorage",
          "signature": "String -\u003e Entity -\u003e Maybe String",
          "source": "src/Network-TableStorage-Query.html#edmString",
          "type": "function"
        },
        "index": {
          "description": "Find the value in string-valued column or return Nothing if no such column exists",
          "hierarchy": "Network TableStorage Query",
          "module": "Network.TableStorage.Query",
          "name": "edmString",
          "normalized": "String-\u003eEntity-\u003eMaybe String",
          "package": "tablestorage",
          "partial": "String",
          "signature": "String-\u003eEntity-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Query.html#v:edmString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData types used to construct the various web method requests.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.TableStorage.Types",
          "name": "Types",
          "package": "tablestorage",
          "source": "src/Network-TableStorage-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Data types used to construct the various web method requests",
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "Types",
          "package": "tablestorage",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccount information: host, port, secret key and account name\n\u003c/p\u003e",
          "module": "Network.TableStorage.Types",
          "name": "Account",
          "package": "tablestorage",
          "source": "src/Network-TableStorage-Types.html#Account",
          "type": "data"
        },
        "index": {
          "description": "Account information host port secret key and account name",
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "Account",
          "package": "tablestorage",
          "partial": "Account",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#t:Account"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Base-64 encoded account secret key\n\u003c/p\u003e",
          "module": "Network.TableStorage.Types",
          "name": "AccountKey",
          "package": "tablestorage",
          "source": "src/Network-TableStorage-Types.html#AccountKey",
          "type": "newtype"
        },
        "index": {
          "description": "The Base-64 encoded account secret key",
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "AccountKey",
          "package": "tablestorage",
          "partial": "Account Key",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#t:AccountKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of authorization headers\n\u003c/p\u003e",
          "module": "Network.TableStorage.Types",
          "name": "AuthHeader",
          "package": "tablestorage",
          "source": "src/Network-TableStorage-Types.html#AuthHeader",
          "type": "newtype"
        },
        "index": {
          "description": "The type of authorization headers",
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "AuthHeader",
          "package": "tablestorage",
          "partial": "Auth Header",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#t:AuthHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe various comparisons supported in entity queries.\n\u003c/p\u003e",
          "module": "Network.TableStorage.Types",
          "name": "ComparisonType",
          "package": "tablestorage",
          "source": "src/Network-TableStorage-Types.html#ComparisonType",
          "type": "data"
        },
        "index": {
          "description": "The various comparisons supported in entity queries",
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "ComparisonType",
          "package": "tablestorage",
          "partial": "Comparison Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#t:ComparisonType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn entity consists of a key and zero or more additional columns.\n\u003c/p\u003e",
          "module": "Network.TableStorage.Types",
          "name": "Entity",
          "package": "tablestorage",
          "source": "src/Network-TableStorage-Types.html#Entity",
          "type": "data"
        },
        "index": {
          "description": "An entity consists of key and zero or more additional columns",
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "Entity",
          "package": "tablestorage",
          "partial": "Entity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#t:Entity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a column in an entity.\n\u003c/p\u003e\u003cp\u003eThe constructor used indicates the data type of the column represented.\n\u003c/p\u003e\u003cp\u003eFor certain operations, the type must match the type of data stored in the table.\n\u003c/p\u003e",
          "module": "Network.TableStorage.Types",
          "name": "EntityColumn",
          "package": "tablestorage",
          "source": "src/Network-TableStorage-Types.html#EntityColumn",
          "type": "data"
        },
        "index": {
          "description": "Represents column in an entity The constructor used indicates the data type of the column represented For certain operations the type must match the type of data stored in the table",
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "EntityColumn",
          "package": "tablestorage",
          "partial": "Entity Column",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#t:EntityColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe data type of entity filters\n\u003c/p\u003e",
          "module": "Network.TableStorage.Types",
          "name": "EntityFilter",
          "package": "tablestorage",
          "source": "src/Network-TableStorage-Types.html#EntityFilter",
          "type": "data"
        },
        "index": {
          "description": "The data type of entity filters",
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "EntityFilter",
          "package": "tablestorage",
          "partial": "Entity Filter",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#t:EntityFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUniquely identifies an entity in a table : a partition key and row key pair.\n\u003c/p\u003e",
          "module": "Network.TableStorage.Types",
          "name": "EntityKey",
          "package": "tablestorage",
          "source": "src/Network-TableStorage-Types.html#EntityKey",
          "type": "data"
        },
        "index": {
          "description": "Uniquely identifies an entity in table partition key and row key pair",
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "EntityKey",
          "package": "tablestorage",
          "partial": "Entity Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#t:EntityKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn entity query consists of an optional filter and an optional number of entities to return.\n\u003c/p\u003e\u003cp\u003eProjections are not currently supported.\n\u003c/p\u003e",
          "module": "Network.TableStorage.Types",
          "name": "EntityQuery",
          "package": "tablestorage",
          "source": "src/Network-TableStorage-Types.html#EntityQuery",
          "type": "data"
        },
        "index": {
          "description": "An entity query consists of an optional filter and an optional number of entities to return Projections are not currently supported",
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "EntityQuery",
          "package": "tablestorage",
          "partial": "Entity Query",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#t:EntityQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException handling type.\n\u003c/p\u003e",
          "module": "Network.TableStorage.Types",
          "name": "QueryResponse",
          "package": "tablestorage",
          "source": "src/Network-TableStorage-Types.html#QueryResponse",
          "type": "data"
        },
        "index": {
          "description": "Exception handling type",
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "QueryResponse",
          "package": "tablestorage",
          "partial": "Query Response",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#t:QueryResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe unencrypted content of the Shared Key authorization header\n\u003c/p\u003e",
          "module": "Network.TableStorage.Types",
          "name": "SharedKeyAuth",
          "package": "tablestorage",
          "source": "src/Network-TableStorage-Types.html#SharedKeyAuth",
          "type": "data"
        },
        "index": {
          "description": "The unencrypted content of the Shared Key authorization header",
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "SharedKeyAuth",
          "package": "tablestorage",
          "partial": "Shared Key Auth",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#t:SharedKeyAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of authorization header signatures\n\u003c/p\u003e",
          "module": "Network.TableStorage.Types",
          "name": "Signature",
          "package": "tablestorage",
          "source": "src/Network-TableStorage-Types.html#Signature",
          "type": "newtype"
        },
        "index": {
          "description": "The type of authorization header signatures",
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "Signature",
          "package": "tablestorage",
          "partial": "Signature",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#t:Signature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTableStorage configuration data\n\u003c/p\u003e",
          "module": "Network.TableStorage.Types",
          "name": "TableConf",
          "package": "tablestorage",
          "source": "src/Network-TableStorage-Types.html#TableConf",
          "type": "data"
        },
        "index": {
          "description": "TableStorage configuration data",
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "TableConf",
          "package": "tablestorage",
          "partial": "Table Conf",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#t:TableConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError type\n\u003c/p\u003e",
          "module": "Network.TableStorage.Types",
          "name": "TableError",
          "package": "tablestorage",
          "source": "src/Network-TableStorage-Types.html#TableError",
          "type": "data"
        },
        "index": {
          "description": "Error type",
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "TableError",
          "package": "tablestorage",
          "partial": "Table Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#t:TableError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonad stack and return type of operations on azure tables\n\u003c/p\u003e",
          "module": "Network.TableStorage.Types",
          "name": "TableStorage",
          "package": "tablestorage",
          "source": "src/Network-TableStorage-Types.html#TableStorage",
          "type": "type"
        },
        "index": {
          "description": "Monad stack and return type of operations on azure tables",
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "TableStorage",
          "package": "tablestorage",
          "partial": "Table Storage",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#t:TableStorage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "Account",
          "package": "tablestorage",
          "signature": "Account",
          "source": "src/Network-TableStorage-Types.html#Account",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "Account",
          "package": "tablestorage",
          "partial": "Account",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:Account"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "AccountKey",
          "package": "tablestorage",
          "signature": "AccountKey",
          "source": "src/Network-TableStorage-Types.html#AccountKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "AccountKey",
          "package": "tablestorage",
          "partial": "Account Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:AccountKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "And",
          "package": "tablestorage",
          "signature": "And [EntityFilter]",
          "source": "src/Network-TableStorage-Types.html#EntityFilter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "And",
          "normalized": "And[EntityFilter]",
          "package": "tablestorage",
          "partial": "And",
          "signature": "And[EntityFilter]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:And"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "AuthHeader",
          "package": "tablestorage",
          "signature": "AuthHeader",
          "source": "src/Network-TableStorage-Types.html#AuthHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "AuthHeader",
          "package": "tablestorage",
          "partial": "Auth Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:AuthHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "CompareBoolean",
          "package": "tablestorage",
          "signature": "CompareBoolean String Bool",
          "source": "src/Network-TableStorage-Types.html#EntityFilter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "CompareBoolean",
          "package": "tablestorage",
          "partial": "Compare Boolean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:CompareBoolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "CompareDateTime",
          "package": "tablestorage",
          "signature": "CompareDateTime String ComparisonType UTCTime",
          "source": "src/Network-TableStorage-Types.html#EntityFilter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "CompareDateTime",
          "package": "tablestorage",
          "partial": "Compare Date Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:CompareDateTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "CompareDouble",
          "package": "tablestorage",
          "signature": "CompareDouble String ComparisonType Double",
          "source": "src/Network-TableStorage-Types.html#EntityFilter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "CompareDouble",
          "package": "tablestorage",
          "partial": "Compare Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:CompareDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "CompareGuid",
          "package": "tablestorage",
          "signature": "CompareGuid String String",
          "source": "src/Network-TableStorage-Types.html#EntityFilter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "CompareGuid",
          "package": "tablestorage",
          "partial": "Compare Guid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:CompareGuid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "CompareInt32",
          "package": "tablestorage",
          "signature": "CompareInt32 String ComparisonType Integer",
          "source": "src/Network-TableStorage-Types.html#EntityFilter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "CompareInt32",
          "package": "tablestorage",
          "partial": "Compare Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:CompareInt32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "CompareInt64",
          "package": "tablestorage",
          "signature": "CompareInt64 String ComparisonType Integer",
          "source": "src/Network-TableStorage-Types.html#EntityFilter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "CompareInt64",
          "package": "tablestorage",
          "partial": "Compare Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:CompareInt64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "CompareString",
          "package": "tablestorage",
          "signature": "CompareString String ComparisonType String",
          "source": "src/Network-TableStorage-Types.html#EntityFilter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "CompareString",
          "package": "tablestorage",
          "partial": "Compare String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:CompareString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "EdmBinary",
          "package": "tablestorage",
          "signature": "EdmBinary (Maybe String)",
          "source": "src/Network-TableStorage-Types.html#EntityColumn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "EdmBinary",
          "package": "tablestorage",
          "partial": "Edm Binary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:EdmBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "EdmBoolean",
          "package": "tablestorage",
          "signature": "EdmBoolean (Maybe Bool)",
          "source": "src/Network-TableStorage-Types.html#EntityColumn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "EdmBoolean",
          "package": "tablestorage",
          "partial": "Edm Boolean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:EdmBoolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "EdmDateTime",
          "package": "tablestorage",
          "signature": "EdmDateTime (Maybe UTCTime)",
          "source": "src/Network-TableStorage-Types.html#EntityColumn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "EdmDateTime",
          "package": "tablestorage",
          "partial": "Edm Date Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:EdmDateTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "EdmDouble",
          "package": "tablestorage",
          "signature": "EdmDouble (Maybe Double)",
          "source": "src/Network-TableStorage-Types.html#EntityColumn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "EdmDouble",
          "package": "tablestorage",
          "partial": "Edm Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:EdmDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "EdmGuid",
          "package": "tablestorage",
          "signature": "EdmGuid (Maybe String)",
          "source": "src/Network-TableStorage-Types.html#EntityColumn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "EdmGuid",
          "package": "tablestorage",
          "partial": "Edm Guid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:EdmGuid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "EdmInt32",
          "package": "tablestorage",
          "signature": "EdmInt32 (Maybe Int)",
          "source": "src/Network-TableStorage-Types.html#EntityColumn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "EdmInt32",
          "package": "tablestorage",
          "partial": "Edm Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:EdmInt32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "EdmInt64",
          "package": "tablestorage",
          "signature": "EdmInt64 (Maybe Int)",
          "source": "src/Network-TableStorage-Types.html#EntityColumn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "EdmInt64",
          "package": "tablestorage",
          "partial": "Edm Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:EdmInt64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "EdmString",
          "package": "tablestorage",
          "signature": "EdmString (Maybe String)",
          "source": "src/Network-TableStorage-Types.html#EntityColumn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "EdmString",
          "package": "tablestorage",
          "partial": "Edm String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:EdmString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "Entity",
          "package": "tablestorage",
          "signature": "Entity",
          "source": "src/Network-TableStorage-Types.html#Entity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "Entity",
          "package": "tablestorage",
          "partial": "Entity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:Entity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "EntityKey",
          "package": "tablestorage",
          "signature": "EntityKey",
          "source": "src/Network-TableStorage-Types.html#EntityKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "EntityKey",
          "package": "tablestorage",
          "partial": "Entity Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:EntityKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "EntityQuery",
          "package": "tablestorage",
          "signature": "EntityQuery",
          "source": "src/Network-TableStorage-Types.html#EntityQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "EntityQuery",
          "package": "tablestorage",
          "partial": "Entity Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:EntityQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "Equal",
          "package": "tablestorage",
          "signature": "Equal",
          "source": "src/Network-TableStorage-Types.html#ComparisonType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "Equal",
          "package": "tablestorage",
          "partial": "Equal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:Equal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "GreaterThan",
          "package": "tablestorage",
          "signature": "GreaterThan",
          "source": "src/Network-TableStorage-Types.html#ComparisonType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "GreaterThan",
          "package": "tablestorage",
          "partial": "Greater Than",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:GreaterThan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "GreaterThanOrEqual",
          "package": "tablestorage",
          "signature": "GreaterThanOrEqual",
          "source": "src/Network-TableStorage-Types.html#ComparisonType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "GreaterThanOrEqual",
          "package": "tablestorage",
          "partial": "Greater Than Or Equal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:GreaterThanOrEqual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "LessThan",
          "package": "tablestorage",
          "signature": "LessThan",
          "source": "src/Network-TableStorage-Types.html#ComparisonType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "LessThan",
          "package": "tablestorage",
          "partial": "Less Than",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:LessThan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "LessThanOrEqual",
          "package": "tablestorage",
          "signature": "LessThanOrEqual",
          "source": "src/Network-TableStorage-Types.html#ComparisonType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "LessThanOrEqual",
          "package": "tablestorage",
          "partial": "Less Than Or Equal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:LessThanOrEqual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "Not",
          "package": "tablestorage",
          "signature": "Not EntityFilter",
          "source": "src/Network-TableStorage-Types.html#EntityFilter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "Not",
          "package": "tablestorage",
          "partial": "Not",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:Not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "NotEqual",
          "package": "tablestorage",
          "signature": "NotEqual",
          "source": "src/Network-TableStorage-Types.html#ComparisonType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "NotEqual",
          "package": "tablestorage",
          "partial": "Not Equal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:NotEqual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "Or",
          "package": "tablestorage",
          "signature": "Or [EntityFilter]",
          "source": "src/Network-TableStorage-Types.html#EntityFilter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "Or",
          "normalized": "Or[EntityFilter]",
          "package": "tablestorage",
          "partial": "Or",
          "signature": "Or[EntityFilter]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:Or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "QueryResponse",
          "package": "tablestorage",
          "signature": "QueryResponse Status String",
          "source": "src/Network-TableStorage-Types.html#QueryResponse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "QueryResponse",
          "package": "tablestorage",
          "partial": "Query Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:QueryResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "SharedKeyAuth",
          "package": "tablestorage",
          "signature": "SharedKeyAuth",
          "source": "src/Network-TableStorage-Types.html#SharedKeyAuth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "SharedKeyAuth",
          "package": "tablestorage",
          "partial": "Shared Key Auth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:SharedKeyAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "Signature",
          "package": "tablestorage",
          "signature": "Signature",
          "source": "src/Network-TableStorage-Types.html#Signature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "Signature",
          "package": "tablestorage",
          "partial": "Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:Signature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "TableConf",
          "package": "tablestorage",
          "signature": "TableConf",
          "source": "src/Network-TableStorage-Types.html#TableConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "TableConf",
          "package": "tablestorage",
          "partial": "Table Conf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:TableConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "TableOtherError",
          "package": "tablestorage",
          "signature": "TableOtherError String",
          "source": "src/Network-TableStorage-Types.html#TableError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "TableOtherError",
          "package": "tablestorage",
          "partial": "Table Other Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:TableOtherError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "TableParseError",
          "package": "tablestorage",
          "signature": "TableParseError",
          "source": "src/Network-TableStorage-Types.html#TableError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "TableParseError",
          "package": "tablestorage",
          "partial": "Table Parse Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:TableParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "TableUnknownError",
          "package": "tablestorage",
          "signature": "TableUnknownError",
          "source": "src/Network-TableStorage-Types.html#TableError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "TableUnknownError",
          "package": "tablestorage",
          "partial": "Table Unknown Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:TableUnknownError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "accountHost",
          "package": "tablestorage",
          "signature": "String",
          "source": "src/Network-TableStorage-Types.html#Account",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "accountHost",
          "package": "tablestorage",
          "partial": "Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:accountHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "accountKey",
          "package": "tablestorage",
          "signature": "AccountKey",
          "source": "src/Network-TableStorage-Types.html#Account",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "accountKey",
          "package": "tablestorage",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:accountKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "accountName",
          "package": "tablestorage",
          "signature": "String",
          "source": "src/Network-TableStorage-Types.html#Account",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "accountName",
          "package": "tablestorage",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:accountName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "accountPort",
          "package": "tablestorage",
          "signature": "Int",
          "source": "src/Network-TableStorage-Types.html#Account",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "accountPort",
          "package": "tablestorage",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:accountPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "accountResourcePrefix",
          "package": "tablestorage",
          "signature": "String",
          "source": "src/Network-TableStorage-Types.html#Account",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "accountResourcePrefix",
          "package": "tablestorage",
          "partial": "Resource Prefix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:accountResourcePrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "accountScheme",
          "package": "tablestorage",
          "signature": "String",
          "source": "src/Network-TableStorage-Types.html#Account",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "accountScheme",
          "package": "tablestorage",
          "partial": "Scheme",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:accountScheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "ekPartitionKey",
          "package": "tablestorage",
          "signature": "String",
          "source": "src/Network-TableStorage-Types.html#EntityKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "ekPartitionKey",
          "package": "tablestorage",
          "partial": "Partition Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:ekPartitionKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "ekRowKey",
          "package": "tablestorage",
          "signature": "String",
          "source": "src/Network-TableStorage-Types.html#EntityKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "ekRowKey",
          "package": "tablestorage",
          "partial": "Row Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:ekRowKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "entityColumns",
          "package": "tablestorage",
          "signature": "[(String, EntityColumn)]",
          "source": "src/Network-TableStorage-Types.html#Entity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "entityColumns",
          "normalized": "[(String,EntityColumn)]",
          "package": "tablestorage",
          "partial": "Columns",
          "signature": "[(String,EntityColumn)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:entityColumns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "entityKey",
          "package": "tablestorage",
          "signature": "EntityKey",
          "source": "src/Network-TableStorage-Types.html#Entity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "entityKey",
          "package": "tablestorage",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:entityKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "eqFilter",
          "package": "tablestorage",
          "signature": "Maybe EntityFilter",
          "source": "src/Network-TableStorage-Types.html#EntityQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "eqFilter",
          "package": "tablestorage",
          "partial": "Filter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:eqFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "eqPageSize",
          "package": "tablestorage",
          "signature": "Maybe Int",
          "source": "src/Network-TableStorage-Types.html#EntityQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "eqPageSize",
          "package": "tablestorage",
          "partial": "Page Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:eqPageSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "httpManager",
          "package": "tablestorage",
          "signature": "Maybe Manager",
          "source": "src/Network-TableStorage-Types.html#TableConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "httpManager",
          "package": "tablestorage",
          "partial": "Manager",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:httpManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "httpProxy",
          "package": "tablestorage",
          "signature": "Maybe Proxy",
          "source": "src/Network-TableStorage-Types.html#TableConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "httpProxy",
          "package": "tablestorage",
          "partial": "Proxy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:httpProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "sharedKeyAuthCanonicalizedResource",
          "package": "tablestorage",
          "signature": "String",
          "source": "src/Network-TableStorage-Types.html#SharedKeyAuth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "sharedKeyAuthCanonicalizedResource",
          "package": "tablestorage",
          "partial": "Key Auth Canonicalized Resource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:sharedKeyAuthCanonicalizedResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "sharedKeyAuthContentMD5",
          "package": "tablestorage",
          "signature": "String",
          "source": "src/Network-TableStorage-Types.html#SharedKeyAuth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "sharedKeyAuthContentMD5",
          "package": "tablestorage",
          "partial": "Key Auth Content MD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:sharedKeyAuthContentMD5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "sharedKeyAuthContentType",
          "package": "tablestorage",
          "signature": "String",
          "source": "src/Network-TableStorage-Types.html#SharedKeyAuth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "sharedKeyAuthContentType",
          "package": "tablestorage",
          "partial": "Key Auth Content Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:sharedKeyAuthContentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "sharedKeyAuthDate",
          "package": "tablestorage",
          "signature": "String",
          "source": "src/Network-TableStorage-Types.html#SharedKeyAuth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "sharedKeyAuthDate",
          "package": "tablestorage",
          "partial": "Key Auth Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:sharedKeyAuthDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "sharedKeyAuthVerb",
          "package": "tablestorage",
          "signature": "Method",
          "source": "src/Network-TableStorage-Types.html#SharedKeyAuth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "sharedKeyAuthVerb",
          "package": "tablestorage",
          "partial": "Key Auth Verb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:sharedKeyAuthVerb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "tableAccount",
          "package": "tablestorage",
          "signature": "Account",
          "source": "src/Network-TableStorage-Types.html#TableConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "tableAccount",
          "package": "tablestorage",
          "partial": "Account",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:tableAccount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "unAccountKey",
          "package": "tablestorage",
          "signature": "String",
          "source": "src/Network-TableStorage-Types.html#AccountKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "unAccountKey",
          "package": "tablestorage",
          "partial": "Account Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:unAccountKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "unAuthHeader",
          "package": "tablestorage",
          "signature": "String",
          "source": "src/Network-TableStorage-Types.html#AuthHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "unAuthHeader",
          "package": "tablestorage",
          "partial": "Auth Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:unAuthHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TableStorage.Types",
          "name": "unSignature",
          "package": "tablestorage",
          "signature": "String",
          "source": "src/Network-TableStorage-Types.html#Signature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TableStorage Types",
          "module": "Network.TableStorage.Types",
          "name": "unSignature",
          "package": "tablestorage",
          "partial": "Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage-Types.html#v:unSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple wrapper for the Azure Table Storage REST API\n\u003c/p\u003e\u003cp\u003eThis module exists simply to re-export the following:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eNetwork.TableStorage.Types\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eNetwork.TableStorage.API\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eNetwork.TableStorage.Development\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Network.TableStorage",
          "name": "TableStorage",
          "package": "tablestorage",
          "source": "src/Network-TableStorage.html",
          "type": "module"
        },
        "index": {
          "description": "simple wrapper for the Azure Table Storage REST API This module exists simply to re-export the following Network.TableStorage.Types Network.TableStorage.API Network.TableStorage.Development",
          "hierarchy": "Network TableStorage",
          "module": "Network.TableStorage",
          "name": "TableStorage",
          "package": "tablestorage",
          "partial": "Table Storage",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tablestorage/docs/Network-TableStorage.html#"
      }
    }
  ]
]