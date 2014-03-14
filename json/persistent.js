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
        "word": "persistent"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Class",
          "name": "Class",
          "package": "persistent",
          "source": "src/Database-Persist-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "Class",
          "package": "persistent",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Class",
          "name": "DeleteCascade",
          "package": "persistent",
          "source": "src/Database-Persist-Class-DeleteCascade.html#DeleteCascade",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "DeleteCascade",
          "package": "persistent",
          "partial": "Delete Cascade",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#t:DeleteCascade"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a value containing all the configuration options for a specific\n backend. This abstraction makes it easier to write code that can easily swap\n backends.\n\u003c/p\u003e",
          "module": "Database.Persist.Class",
          "name": "PersistConfig",
          "package": "persistent",
          "source": "src/Database-Persist-Class-PersistConfig.html#PersistConfig",
          "type": "class"
        },
        "index": {
          "description": "Represents value containing all the configuration options for specific backend This abstraction makes it easier to write code that can easily swap backends",
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "PersistConfig",
          "package": "persistent",
          "partial": "Persist Config",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#t:PersistConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePersistent serialized Haskell records to the database.\n A Database \u003ccode\u003e\u003ca\u003eEntity\u003c/a\u003e\u003c/code\u003e (A row in SQL, a document in MongoDB, etc)\n corresponds to a \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e plus a Haskell record.\n\u003c/p\u003e\u003cp\u003eFor every Haskell record type stored in the database there is a corresponding \u003ccode\u003e\u003ca\u003ePersistEntity\u003c/a\u003e\u003c/code\u003e instance.\n An instance of PersistEntity contains meta-data for the record.\n PersistEntity also helps abstract over different record types.\n That way the same query interface can return a \u003ccode\u003e\u003ca\u003ePersistEntity\u003c/a\u003e\u003c/code\u003e, with each query returning different types of Haskell records.\n\u003c/p\u003e\u003cp\u003eSome advanced type system capabilities are used to make this process type-safe.\n Persistent users usually don't need to understand the class associated data and functions.\n\u003c/p\u003e",
          "module": "Database.Persist.Class",
          "name": "PersistEntity",
          "package": "persistent",
          "source": "src/Database-Persist-Class-PersistEntity.html#PersistEntity",
          "type": "class"
        },
        "index": {
          "description": "Persistent serialized Haskell records to the database Database Entity row in SQL document in MongoDB etc corresponds to Key plus Haskell record For every Haskell record type stored in the database there is corresponding PersistEntity instance An instance of PersistEntity contains meta-data for the record PersistEntity also helps abstract over different record types That way the same query interface can return PersistEntity with each query returning different types of Haskell records Some advanced type system capabilities are used to make this process type-safe Persistent users usually don need to understand the class associated data and functions",
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "PersistEntity",
          "package": "persistent",
          "partial": "Persist Entity",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#t:PersistEntity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value which can be marshalled to and from a \u003ccode\u003e\u003ca\u003ePersistValue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.Persist.Class",
          "name": "PersistField",
          "package": "persistent",
          "source": "src/Database-Persist-Class-PersistField.html#PersistField",
          "type": "class"
        },
        "index": {
          "description": "value which can be marshalled to and from PersistValue",
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "PersistField",
          "package": "persistent",
          "partial": "Persist Field",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#t:PersistField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Class",
          "name": "PersistQuery",
          "package": "persistent",
          "source": "src/Database-Persist-Class-PersistQuery.html#PersistQuery",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "PersistQuery",
          "package": "persistent",
          "partial": "Persist Query",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#t:PersistQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Class",
          "name": "PersistStore",
          "package": "persistent",
          "source": "src/Database-Persist-Class-PersistStore.html#PersistStore",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "PersistStore",
          "package": "persistent",
          "partial": "Persist Store",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#t:PersistStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQueries against unique keys (other than the id).\n\u003c/p\u003e\u003cp\u003ePlease read the general Persistent documentation to learn how to create\n Unique keys.\n SQL backends automatically create uniqueness constraints, but for MongoDB you must manually place a unique index on the field.\n\u003c/p\u003e\u003cp\u003eSome functions in this module (insertUnique, insertBy, and replaceUnique) first query the unique indexes to check for conflicts.\n You could instead optimistically attempt to perform the operation (e.g. replace instead of replaceUnique). However,\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e there is some fragility to trying to catch the correct exception and determing the column of failure.\n\u003c/li\u003e\u003cli\u003e an exception will automatically abort the current SQL transaction\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Database.Persist.Class",
          "name": "PersistUnique",
          "package": "persistent",
          "source": "src/Database-Persist-Class-PersistUnique.html#PersistUnique",
          "type": "class"
        },
        "index": {
          "description": "Queries against unique keys other than the id Please read the general Persistent documentation to learn how to create Unique keys SQL backends automatically create uniqueness constraints but for MongoDB you must manually place unique index on the field Some functions in this module insertUnique insertBy and replaceUnique first query the unique indexes to check for conflicts You could instead optimistically attempt to perform the operation e.g replace instead of replaceUnique However there is some fragility to trying to catch the correct exception and determing the column of failure an exception will automatically abort the current SQL transaction",
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "PersistUnique",
          "package": "persistent",
          "partial": "Persist Unique",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#t:PersistUnique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the config settings based on environment variables.\n\u003c/p\u003e",
          "module": "Database.Persist.Class",
          "name": "applyEnv",
          "package": "persistent",
          "signature": "c -\u003e IO c",
          "source": "src/Database-Persist-Class-PersistConfig.html#applyEnv",
          "type": "method"
        },
        "index": {
          "description": "Modify the config settings based on environment variables",
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "applyEnv",
          "normalized": "a-\u003eIO a",
          "package": "persistent",
          "partial": "Env",
          "signature": "c-\u003eIO c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:applyEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Class",
          "name": "belongsTo",
          "package": "persistent",
          "signature": "(ent1 -\u003e Maybe (Key ent2)) -\u003e ent1 -\u003e m (Maybe ent2)",
          "source": "src/Database-Persist-Class-PersistStore.html#belongsTo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "belongsTo",
          "normalized": "(a-\u003eMaybe(Key a))-\u003ea-\u003eb(Maybe a)",
          "package": "persistent",
          "partial": "To",
          "signature": "(ent-\u003eMaybe(Key ent))-\u003eent-\u003em(Maybe ent)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:belongsTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esame as belongsTo, but uses \u003ccode\u003egetJust\u003c/code\u003e and therefore is similarly unsafe\n\u003c/p\u003e",
          "module": "Database.Persist.Class",
          "name": "belongsToJust",
          "package": "persistent",
          "signature": "(ent1 -\u003e Key ent2) -\u003e ent1 -\u003e m ent2",
          "source": "src/Database-Persist-Class-PersistStore.html#belongsToJust",
          "type": "function"
        },
        "index": {
          "description": "same as belongsTo but uses getJust and therefore is similarly unsafe",
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "belongsToJust",
          "normalized": "(a-\u003eKey a)-\u003ea-\u003eb a",
          "package": "persistent",
          "partial": "To Just",
          "signature": "(ent-\u003eKey ent)-\u003eent-\u003em ent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:belongsToJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe total number of records fulfilling the given criterion.\n\u003c/p\u003e",
          "module": "Database.Persist.Class",
          "name": "count",
          "package": "persistent",
          "signature": "[Filter val] -\u003e m Int",
          "source": "src/Database-Persist-Class-PersistQuery.html#count",
          "type": "method"
        },
        "index": {
          "description": "The total number of records fulfilling the given criterion",
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "count",
          "normalized": "[Filter a]-\u003eb Int",
          "package": "persistent",
          "signature": "[Filter val]-\u003em Int",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new connection pool based on the given config settings.\n\u003c/p\u003e",
          "module": "Database.Persist.Class",
          "name": "createPoolConfig",
          "package": "persistent",
          "signature": "c -\u003e IO (PersistConfigPool c)",
          "source": "src/Database-Persist-Class-PersistConfig.html#createPoolConfig",
          "type": "method"
        },
        "index": {
          "description": "Create new connection pool based on the given config settings",
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "createPoolConfig",
          "normalized": "a-\u003eIO(PersistConfigPool a)",
          "package": "persistent",
          "partial": "Pool Config",
          "signature": "c-\u003eIO(PersistConfigPool c)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:createPoolConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete a specific record by identifier. Does nothing if record does\n not exist.\n\u003c/p\u003e",
          "module": "Database.Persist.Class",
          "name": "delete",
          "package": "persistent",
          "signature": "Key val -\u003e m ()",
          "source": "src/Database-Persist-Class-PersistStore.html#delete",
          "type": "method"
        },
        "index": {
          "description": "Delete specific record by identifier Does nothing if record does not exist",
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "delete",
          "normalized": "Key a-\u003eb()",
          "package": "persistent",
          "signature": "Key val-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete a specific record by unique key. Does nothing if no record\n matches.\n\u003c/p\u003e",
          "module": "Database.Persist.Class",
          "name": "deleteBy",
          "package": "persistent",
          "signature": "Unique val -\u003e m ()",
          "source": "src/Database-Persist-Class-PersistUnique.html#deleteBy",
          "type": "method"
        },
        "index": {
          "description": "Delete specific record by unique key Does nothing if no record matches",
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "deleteBy",
          "normalized": "Unique a-\u003eb()",
          "package": "persistent",
          "partial": "By",
          "signature": "Unique val-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:deleteBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Class",
          "name": "deleteCascade",
          "package": "persistent",
          "signature": "Key a -\u003e m ()",
          "source": "src/Database-Persist-Class-DeleteCascade.html#deleteCascade",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "deleteCascade",
          "normalized": "Key a-\u003eb()",
          "package": "persistent",
          "partial": "Cascade",
          "signature": "Key a-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:deleteCascade"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Class",
          "name": "deleteCascadeWhere",
          "package": "persistent",
          "signature": "[Filter a] -\u003e m ()",
          "source": "src/Database-Persist-Class-DeleteCascade.html#deleteCascadeWhere",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "deleteCascadeWhere",
          "normalized": "[Filter a]-\u003eb()",
          "package": "persistent",
          "partial": "Cascade Where",
          "signature": "[Filter a]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:deleteCascadeWhere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete all records matching the given criterion.\n\u003c/p\u003e",
          "module": "Database.Persist.Class",
          "name": "deleteWhere",
          "package": "persistent",
          "signature": "[Filter val] -\u003e m ()",
          "source": "src/Database-Persist-Class-PersistQuery.html#deleteWhere",
          "type": "method"
        },
        "index": {
          "description": "Delete all records matching the given criterion",
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "deleteWhere",
          "normalized": "[Filter a]-\u003eb()",
          "package": "persistent",
          "partial": "Where",
          "signature": "[Filter val]-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:deleteWhere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eretrieve the EntityDef meta-data for the record\n\u003c/p\u003e",
          "module": "Database.Persist.Class",
          "name": "entityDef",
          "package": "persistent",
          "signature": "m record -\u003e EntityDef SqlType",
          "source": "src/Database-Persist-Class-PersistEntity.html#entityDef",
          "type": "method"
        },
        "index": {
          "description": "retrieve the EntityDef meta-data for the record",
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "entityDef",
          "normalized": "a b-\u003eEntityDef SqlType",
          "package": "persistent",
          "partial": "Def",
          "signature": "m record-\u003eEntityDef SqlType",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:entityDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredefined \u003ccode\u003eparseJSON\u003c/code\u003e. The input JSON looks like\n \u003ccode\u003e{\"id\": 1, \"name\": ...}\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe typical usage is:\n\u003c/p\u003e\u003cpre\u003e\n   instance FromJSON User where\n       parseJSON = entityIdFromJSON\n\u003c/pre\u003e",
          "module": "Database.Persist.Class",
          "name": "entityIdFromJSON",
          "package": "persistent",
          "signature": "Value -\u003e Parser (Entity e)",
          "source": "src/Database-Persist-Class-PersistEntity.html#entityIdFromJSON",
          "type": "function"
        },
        "index": {
          "description": "Predefined parseJSON The input JSON looks like id name The typical usage is instance FromJSON User where parseJSON entityIdFromJSON",
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "entityIdFromJSON",
          "normalized": "Value-\u003eParser(Entity a)",
          "package": "persistent",
          "partial": "Id From JSON",
          "signature": "Value-\u003eParser(Entity e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:entityIdFromJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredefined \u003ccode\u003etoJSON\u003c/code\u003e. The resulting JSON looks like\n \u003ccode\u003e{\"id\": 1, \"name\": ...}\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe typical usage is:\n\u003c/p\u003e\u003cpre\u003e\n   instance ToJSON User where\n       toJSON = entityIdToJSON\n\u003c/pre\u003e",
          "module": "Database.Persist.Class",
          "name": "entityIdToJSON",
          "package": "persistent",
          "signature": "Entity e -\u003e Value",
          "source": "src/Database-Persist-Class-PersistEntity.html#entityIdToJSON",
          "type": "function"
        },
        "index": {
          "description": "Predefined toJSON The resulting JSON looks like id name The typical usage is instance ToJSON User where toJSON entityIdToJSON",
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "entityIdToJSON",
          "normalized": "Entity a-\u003eValue",
          "package": "persistent",
          "partial": "Id To JSON",
          "signature": "Entity e-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:entityIdToJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Class",
          "name": "fieldLens",
          "package": "persistent",
          "signature": "(field -\u003e f field) -\u003e Entity record -\u003e f (Entity record)",
          "source": "src/Database-Persist-Class-PersistEntity.html#fieldLens",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "fieldLens",
          "normalized": "(a-\u003eb a)-\u003eEntity c-\u003eb(Entity c)",
          "package": "persistent",
          "partial": "Lens",
          "signature": "(field-\u003ef field)-\u003eEntity record-\u003ef(Entity record)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:fieldLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Class",
          "name": "fromPersistValue",
          "package": "persistent",
          "signature": "PersistValue -\u003e Either Text a",
          "source": "src/Database-Persist-Class-PersistField.html#fromPersistValue",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "fromPersistValue",
          "normalized": "PersistValue-\u003eEither Text a",
          "package": "persistent",
          "partial": "Persist Value",
          "signature": "PersistValue-\u003eEither Text a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:fromPersistValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert from database values to a Haskell record\n\u003c/p\u003e",
          "module": "Database.Persist.Class",
          "name": "fromPersistValues",
          "package": "persistent",
          "signature": "[PersistValue] -\u003e Either Text record",
          "source": "src/Database-Persist-Class-PersistEntity.html#fromPersistValues",
          "type": "method"
        },
        "index": {
          "description": "Convert from database values to Haskell record",
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "fromPersistValues",
          "normalized": "[PersistValue]-\u003eEither Text a",
          "package": "persistent",
          "partial": "Persist Values",
          "signature": "[PersistValue]-\u003eEither Text record",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:fromPersistValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a record by identifier, if available.\n\u003c/p\u003e",
          "module": "Database.Persist.Class",
          "name": "get",
          "package": "persistent",
          "signature": "Key val -\u003e m (Maybe val)",
          "source": "src/Database-Persist-Class-PersistStore.html#get",
          "type": "method"
        },
        "index": {
          "description": "Get record by identifier if available",
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "get",
          "normalized": "Key a-\u003eb(Maybe a)",
          "package": "persistent",
          "signature": "Key val-\u003em(Maybe val)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a record by unique key, if available. Returns also the identifier.\n\u003c/p\u003e",
          "module": "Database.Persist.Class",
          "name": "getBy",
          "package": "persistent",
          "signature": "Unique val -\u003e m (Maybe (Entity val))",
          "source": "src/Database-Persist-Class-PersistUnique.html#getBy",
          "type": "method"
        },
        "index": {
          "description": "Get record by unique key if available Returns also the identifier",
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "getBy",
          "normalized": "Unique a-\u003eb(Maybe(Entity a))",
          "package": "persistent",
          "partial": "By",
          "signature": "Unique val-\u003em(Maybe(Entity val))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:getBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA modification of \u003ccode\u003e\u003ca\u003egetBy\u003c/a\u003e\u003c/code\u003e, which takes the \u003ccode\u003e\u003ca\u003ePersistEntity\u003c/a\u003e\u003c/code\u003e itself instead\n of a \u003ccode\u003e\u003ca\u003eUnique\u003c/a\u003e\u003c/code\u003e value. Returns a value matching \u003cem\u003eone\u003c/em\u003e of the unique keys. This\n function makes the most sense on entities with a single \u003ccode\u003e\u003ca\u003eUnique\u003c/a\u003e\u003c/code\u003e\n constructor.\n\u003c/p\u003e",
          "module": "Database.Persist.Class",
          "name": "getByValue",
          "package": "persistent",
          "signature": "value -\u003e m (Maybe (Entity value))",
          "source": "src/Database-Persist-Class-PersistUnique.html#getByValue",
          "type": "function"
        },
        "index": {
          "description": "modification of getBy which takes the PersistEntity itself instead of Unique value Returns value matching one of the unique keys This function makes the most sense on entities with single Unique constructor",
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "getByValue",
          "normalized": "a-\u003eb(Maybe(Entity a))",
          "package": "persistent",
          "partial": "By Value",
          "signature": "value-\u003em(Maybe(Entity value))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:getByValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as get, but for a non-null (not Maybe) foreign key\n   Unsafe unless your database is enforcing that the foreign key is valid\n\u003c/p\u003e",
          "module": "Database.Persist.Class",
          "name": "getJust",
          "package": "persistent",
          "signature": "Key val -\u003e m val",
          "source": "src/Database-Persist-Class-PersistStore.html#getJust",
          "type": "function"
        },
        "index": {
          "description": "Same as get but for non-null not Maybe foreign key Unsafe unless your database is enforcing that the foreign key is valid",
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "getJust",
          "normalized": "Key a-\u003eb a",
          "package": "persistent",
          "partial": "Just",
          "signature": "Key val-\u003em val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:getJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new record in the database, returning an automatically created\n key (in SQL an auto-increment id).\n\u003c/p\u003e",
          "module": "Database.Persist.Class",
          "name": "insert",
          "package": "persistent",
          "signature": "val -\u003e m (Key val)",
          "source": "src/Database-Persist-Class-PersistStore.html#insert",
          "type": "method"
        },
        "index": {
          "description": "Create new record in the database returning an automatically created key in SQL an auto-increment id",
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "insert",
          "normalized": "a-\u003eb(Key a)",
          "package": "persistent",
          "signature": "val-\u003em(Key val)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a value, checking for conflicts with any unique constraints.  If a\n duplicate exists in the database, it is returned as \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e. Otherwise, the\n new 'Key is returned as \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.Persist.Class",
          "name": "insertBy",
          "package": "persistent",
          "signature": "val -\u003e m (Either (Entity val) (Key val))",
          "source": "src/Database-Persist-Class-PersistUnique.html#insertBy",
          "type": "function"
        },
        "index": {
          "description": "Insert value checking for conflicts with any unique constraints If duplicate exists in the database it is returned as Left Otherwise the new Key is returned as Right",
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "insertBy",
          "normalized": "a-\u003eb(Either(Entity a)(Key a))",
          "package": "persistent",
          "partial": "By",
          "signature": "val-\u003em(Either(Entity val)(Key val))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:insertBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new record in the database using the given key.\n\u003c/p\u003e",
          "module": "Database.Persist.Class",
          "name": "insertKey",
          "package": "persistent",
          "signature": "Key val -\u003e val -\u003e m ()",
          "source": "src/Database-Persist-Class-PersistStore.html#insertKey",
          "type": "method"
        },
        "index": {
          "description": "Create new record in the database using the given key",
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "insertKey",
          "normalized": "Key a-\u003ea-\u003eb()",
          "package": "persistent",
          "partial": "Key",
          "signature": "Key val-\u003eval-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:insertKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate multiple records in the database.\n SQL backends currently use the slow default implementation of\n \u003ccode\u003emapM insert\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.Persist.Class",
          "name": "insertMany",
          "package": "persistent",
          "signature": "[val] -\u003e m [Key val]",
          "source": "src/Database-Persist-Class-PersistStore.html#insertMany",
          "type": "method"
        },
        "index": {
          "description": "Create multiple records in the database SQL backends currently use the slow default implementation of mapM insert",
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "insertMany",
          "normalized": "[a]-\u003eb[Key a]",
          "package": "persistent",
          "partial": "Many",
          "signature": "[val]-\u003em[Key val]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:insertMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e, but returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e when the record\n couldn't be inserted because of a uniqueness constraint.\n\u003c/p\u003e",
          "module": "Database.Persist.Class",
          "name": "insertUnique",
          "package": "persistent",
          "signature": "val -\u003e m (Maybe (Key val))",
          "source": "src/Database-Persist-Class-PersistUnique.html#insertUnique",
          "type": "method"
        },
        "index": {
          "description": "Like insert but returns Nothing when the record couldn be inserted because of uniqueness constraint",
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "insertUnique",
          "normalized": "a-\u003eb(Maybe(Key a))",
          "package": "persistent",
          "partial": "Unique",
          "signature": "val-\u003em(Maybe(Key val))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:insertUnique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e, but doesn't return a \u003ccode\u003eKey\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.Persist.Class",
          "name": "insert_",
          "package": "persistent",
          "signature": "val -\u003e m ()",
          "source": "src/Database-Persist-Class-PersistStore.html#insert_",
          "type": "method"
        },
        "index": {
          "description": "Same as insert but doesn return Key",
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "insert_",
          "normalized": "a-\u003eb()",
          "package": "persistent",
          "signature": "val-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:insert_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredefined \u003ccode\u003eparseJSON\u003c/code\u003e. The input JSON looks like\n \u003ccode\u003e{\"key\": 1, \"value\": {\"name\": ...}}\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe typical usage is:\n\u003c/p\u003e\u003cpre\u003e\n   instance FromJSON User where\n       parseJSON = keyValueEntityFromJSON\n\u003c/pre\u003e",
          "module": "Database.Persist.Class",
          "name": "keyValueEntityFromJSON",
          "package": "persistent",
          "signature": "Value -\u003e Parser (Entity e)",
          "source": "src/Database-Persist-Class-PersistEntity.html#keyValueEntityFromJSON",
          "type": "function"
        },
        "index": {
          "description": "Predefined parseJSON The input JSON looks like key value name The typical usage is instance FromJSON User where parseJSON keyValueEntityFromJSON",
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "keyValueEntityFromJSON",
          "normalized": "Value-\u003eParser(Entity a)",
          "package": "persistent",
          "partial": "Value Entity From JSON",
          "signature": "Value-\u003eParser(Entity e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:keyValueEntityFromJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredefined \u003ccode\u003etoJSON\u003c/code\u003e. The resulting JSON looks like\n \u003ccode\u003e{\"key\": 1, \"value\": {\"name\": ...}}\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe typical usage is:\n\u003c/p\u003e\u003cpre\u003e\n   instance ToJSON User where\n       toJSON = keyValueEntityToJSON\n\u003c/pre\u003e",
          "module": "Database.Persist.Class",
          "name": "keyValueEntityToJSON",
          "package": "persistent",
          "signature": "Entity e -\u003e Value",
          "source": "src/Database-Persist-Class-PersistEntity.html#keyValueEntityToJSON",
          "type": "function"
        },
        "index": {
          "description": "Predefined toJSON The resulting JSON looks like key value name The typical usage is instance ToJSON User where toJSON keyValueEntityToJSON",
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "keyValueEntityToJSON",
          "normalized": "Entity a-\u003eValue",
          "package": "persistent",
          "partial": "Value Entity To JSON",
          "signature": "Entity e-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:keyValueEntityToJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad the config settings from a \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e, most likely taken from a YAML\n config file.\n\u003c/p\u003e",
          "module": "Database.Persist.Class",
          "name": "loadConfig",
          "package": "persistent",
          "signature": "Value -\u003e Parser c",
          "source": "src/Database-Persist-Class-PersistConfig.html#loadConfig",
          "type": "method"
        },
        "index": {
          "description": "Load the config settings from Value most likely taken from YAML config file",
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "loadConfig",
          "normalized": "Value-\u003eParser a",
          "package": "persistent",
          "partial": "Config",
          "signature": "Value-\u003eParser c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:loadConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn meta-data for a given \u003ccode\u003e\u003ca\u003eEntityField\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.Persist.Class",
          "name": "persistFieldDef",
          "package": "persistent",
          "signature": "EntityField record typ -\u003e FieldDef SqlType",
          "source": "src/Database-Persist-Class-PersistEntity.html#persistFieldDef",
          "type": "method"
        },
        "index": {
          "description": "return meta-data for given EntityField",
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "persistFieldDef",
          "normalized": "EntityField a b-\u003eFieldDef SqlType",
          "package": "persistent",
          "partial": "Field Def",
          "signature": "EntityField record typ-\u003eFieldDef SqlType",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:persistFieldDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Class",
          "name": "persistIdField",
          "package": "persistent",
          "signature": "EntityField record (Key record)",
          "source": "src/Database-Persist-Class-PersistEntity.html#persistIdField",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "persistIdField",
          "package": "persistent",
          "partial": "Id Field",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:persistIdField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Class",
          "name": "persistUniqueKeys",
          "package": "persistent",
          "signature": "record -\u003e [Unique record]",
          "source": "src/Database-Persist-Class-PersistEntity.html#persistUniqueKeys",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "persistUniqueKeys",
          "normalized": "a-\u003e[Unique a]",
          "package": "persistent",
          "partial": "Unique Keys",
          "signature": "record-\u003e[Unique record]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:persistUniqueKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Class",
          "name": "persistUniqueToFieldNames",
          "package": "persistent",
          "signature": "Unique record -\u003e [(HaskellName, DBName)]",
          "source": "src/Database-Persist-Class-PersistEntity.html#persistUniqueToFieldNames",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "persistUniqueToFieldNames",
          "normalized": "Unique a-\u003e[(HaskellName,DBName)]",
          "package": "persistent",
          "partial": "Unique To Field Names",
          "signature": "Unique record-\u003e[(HaskellName,DBName)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:persistUniqueToFieldNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Class",
          "name": "persistUniqueToValues",
          "package": "persistent",
          "signature": "Unique record -\u003e [PersistValue]",
          "source": "src/Database-Persist-Class-PersistEntity.html#persistUniqueToValues",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "persistUniqueToValues",
          "normalized": "Unique a-\u003e[PersistValue]",
          "package": "persistent",
          "partial": "Unique To Values",
          "signature": "Unique record-\u003e[PersistValue]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:persistUniqueToValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace the record in the database with the given\n key. Note that the result is undefined if such record does\n not exist, so you must use 'insertKey or \u003ccode\u003e\u003ca\u003erepsert\u003c/a\u003e\u003c/code\u003e in\n these cases.\n\u003c/p\u003e",
          "module": "Database.Persist.Class",
          "name": "replace",
          "package": "persistent",
          "signature": "Key val -\u003e val -\u003e m ()",
          "source": "src/Database-Persist-Class-PersistStore.html#replace",
          "type": "method"
        },
        "index": {
          "description": "Replace the record in the database with the given key Note that the result is undefined if such record does not exist so you must use insertKey or repsert in these cases",
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "replace",
          "normalized": "Key a-\u003ea-\u003eb()",
          "package": "persistent",
          "signature": "Key val-\u003eval-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:replace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt to replace the record of the given key with the given new record.\n First query the unique fields to make sure the replacement maintains uniqueness constraints.\n Return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the replacement was made.\n If uniqueness is violated, return a \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e with the \u003ccode\u003e\u003ca\u003eUnique\u003c/a\u003e\u003c/code\u003e violation\n\u003c/p\u003e\u003cp\u003eSince 1.2.2.0\n\u003c/p\u003e",
          "module": "Database.Persist.Class",
          "name": "replaceUnique",
          "package": "persistent",
          "signature": "Key record -\u003e record -\u003e m (Maybe (Unique record))",
          "source": "src/Database-Persist-Class-PersistUnique.html#replaceUnique",
          "type": "function"
        },
        "index": {
          "description": "Attempt to replace the record of the given key with the given new record First query the unique fields to make sure the replacement maintains uniqueness constraints Return Nothing if the replacement was made If uniqueness is violated return Just with the Unique violation Since",
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "replaceUnique",
          "normalized": "Key a-\u003ea-\u003eb(Maybe(Unique a))",
          "package": "persistent",
          "partial": "Unique",
          "signature": "Key record-\u003erecord-\u003em(Maybe(Unique record))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:replaceUnique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut the record in the database with the given key.\n Unlike \u003ccode\u003e\u003ca\u003ereplace\u003c/a\u003e\u003c/code\u003e, if a record with the given key does not\n exist then a new record will be inserted.\n\u003c/p\u003e",
          "module": "Database.Persist.Class",
          "name": "repsert",
          "package": "persistent",
          "signature": "Key val -\u003e val -\u003e m ()",
          "source": "src/Database-Persist-Class-PersistStore.html#repsert",
          "type": "method"
        },
        "index": {
          "description": "Put the record in the database with the given key Unlike replace if record with the given key does not exist then new record will be inserted",
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "repsert",
          "normalized": "Key a-\u003ea-\u003eb()",
          "package": "persistent",
          "signature": "Key val-\u003eval-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:repsert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a database action by taking a connection from the pool.\n\u003c/p\u003e",
          "module": "Database.Persist.Class",
          "name": "runPool",
          "package": "persistent",
          "signature": "c -\u003e PersistConfigBackend c m a -\u003e PersistConfigPool c -\u003e m a",
          "source": "src/Database-Persist-Class-PersistConfig.html#runPool",
          "type": "method"
        },
        "index": {
          "description": "Run database action by taking connection from the pool",
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "runPool",
          "normalized": "a-\u003ePersistConfigBackend a b c-\u003ePersistConfigPool a-\u003eb c",
          "package": "persistent",
          "partial": "Pool",
          "signature": "c-\u003ePersistConfigBackend c m a-\u003ePersistConfigPool c-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:runPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget just the first record for the criterion\n\u003c/p\u003e",
          "module": "Database.Persist.Class",
          "name": "selectFirst",
          "package": "persistent",
          "signature": "[Filter val] -\u003e [SelectOpt val] -\u003e m (Maybe (Entity val))",
          "source": "src/Database-Persist-Class-PersistQuery.html#selectFirst",
          "type": "method"
        },
        "index": {
          "description": "get just the first record for the criterion",
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "selectFirst",
          "normalized": "[Filter a]-\u003e[SelectOpt a]-\u003eb(Maybe(Entity a))",
          "package": "persistent",
          "partial": "First",
          "signature": "[Filter val]-\u003e[SelectOpt val]-\u003em(Maybe(Entity val))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:selectFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003es of all records matching the given criterion.\n\u003c/p\u003e",
          "module": "Database.Persist.Class",
          "name": "selectKeys",
          "package": "persistent",
          "signature": "[Filter val] -\u003e [SelectOpt val] -\u003e Source m (Key val)",
          "source": "src/Database-Persist-Class-PersistQuery.html#selectKeys",
          "type": "method"
        },
        "index": {
          "description": "Get the Key of all records matching the given criterion",
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "selectKeys",
          "normalized": "[Filter a]-\u003e[SelectOpt a]-\u003eSource b(Key a)",
          "package": "persistent",
          "partial": "Keys",
          "signature": "[Filter val]-\u003e[SelectOpt val]-\u003eSource m(Key val)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:selectKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall \u003ccode\u003e\u003ca\u003eselectKeys\u003c/a\u003e\u003c/code\u003e but return the result as a list.\n\u003c/p\u003e",
          "module": "Database.Persist.Class",
          "name": "selectKeysList",
          "package": "persistent",
          "signature": "[Filter val] -\u003e [SelectOpt val] -\u003e m [Key val]",
          "source": "src/Database-Persist-Class-PersistQuery.html#selectKeysList",
          "type": "function"
        },
        "index": {
          "description": "Call selectKeys but return the result as list",
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "selectKeysList",
          "normalized": "[Filter a]-\u003e[SelectOpt a]-\u003eb[Key a]",
          "package": "persistent",
          "partial": "Keys List",
          "signature": "[Filter val]-\u003e[SelectOpt val]-\u003em[Key val]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:selectKeysList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall \u003ccode\u003e\u003ca\u003eselectSource\u003c/a\u003e\u003c/code\u003e but return the result as a list.\n\u003c/p\u003e",
          "module": "Database.Persist.Class",
          "name": "selectList",
          "package": "persistent",
          "signature": "[Filter val] -\u003e [SelectOpt val] -\u003e m [Entity val]",
          "source": "src/Database-Persist-Class-PersistQuery.html#selectList",
          "type": "function"
        },
        "index": {
          "description": "Call selectSource but return the result as list",
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "selectList",
          "normalized": "[Filter a]-\u003e[SelectOpt a]-\u003eb[Entity a]",
          "package": "persistent",
          "partial": "List",
          "signature": "[Filter val]-\u003e[SelectOpt val]-\u003em[Entity val]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:selectList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all records matching the given criterion in the specified order.\n Returns also the identifiers.\n\u003c/p\u003e",
          "module": "Database.Persist.Class",
          "name": "selectSource",
          "package": "persistent",
          "signature": "[Filter val] -\u003e [SelectOpt val] -\u003e Source m (Entity val)",
          "source": "src/Database-Persist-Class-PersistQuery.html#selectSource",
          "type": "method"
        },
        "index": {
          "description": "Get all records matching the given criterion in the specified order Returns also the identifiers",
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "selectSource",
          "normalized": "[Filter a]-\u003e[SelectOpt a]-\u003eSource b(Entity a)",
          "package": "persistent",
          "partial": "Source",
          "signature": "[Filter val]-\u003e[SelectOpt val]-\u003eSource m(Entity val)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:selectSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the database fields of a record\n\u003c/p\u003e",
          "module": "Database.Persist.Class",
          "name": "toPersistFields",
          "package": "persistent",
          "signature": "record -\u003e [SomePersistField]",
          "source": "src/Database-Persist-Class-PersistEntity.html#toPersistFields",
          "type": "method"
        },
        "index": {
          "description": "Get the database fields of record",
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "toPersistFields",
          "normalized": "a-\u003e[SomePersistField]",
          "package": "persistent",
          "partial": "Persist Fields",
          "signature": "record-\u003e[SomePersistField]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:toPersistFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Class",
          "name": "toPersistValue",
          "package": "persistent",
          "signature": "a -\u003e PersistValue",
          "source": "src/Database-Persist-Class-PersistField.html#toPersistValue",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "toPersistValue",
          "normalized": "a-\u003ePersistValue",
          "package": "persistent",
          "partial": "Persist Value",
          "signature": "a-\u003ePersistValue",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:toPersistValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate individual fields on a specific record.\n\u003c/p\u003e",
          "module": "Database.Persist.Class",
          "name": "update",
          "package": "persistent",
          "signature": "Key val -\u003e [Update val] -\u003e m ()",
          "source": "src/Database-Persist-Class-PersistQuery.html#update",
          "type": "method"
        },
        "index": {
          "description": "Update individual fields on specific record",
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "update",
          "normalized": "Key a-\u003e[Update a]-\u003eb()",
          "package": "persistent",
          "signature": "Key val-\u003e[Update val]-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate individual fields on a specific record, and retrieve the\n updated value from the database.\n\u003c/p\u003e\u003cp\u003eNote that this function will throw an exception if the given key is not\n found in the database.\n\u003c/p\u003e",
          "module": "Database.Persist.Class",
          "name": "updateGet",
          "package": "persistent",
          "signature": "Key val -\u003e [Update val] -\u003e m val",
          "source": "src/Database-Persist-Class-PersistQuery.html#updateGet",
          "type": "method"
        },
        "index": {
          "description": "Update individual fields on specific record and retrieve the updated value from the database Note that this function will throw an exception if the given key is not found in the database",
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "updateGet",
          "normalized": "Key a-\u003e[Update a]-\u003eb a",
          "package": "persistent",
          "partial": "Get",
          "signature": "Key val-\u003e[Update val]-\u003em val",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:updateGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate individual fields on any record matching the given criterion.\n\u003c/p\u003e",
          "module": "Database.Persist.Class",
          "name": "updateWhere",
          "package": "persistent",
          "signature": "[Filter val] -\u003e [Update val] -\u003e m ()",
          "source": "src/Database-Persist-Class-PersistQuery.html#updateWhere",
          "type": "method"
        },
        "index": {
          "description": "Update individual fields on any record matching the given criterion",
          "hierarchy": "Database Persist Class",
          "module": "Database.Persist.Class",
          "name": "updateWhere",
          "normalized": "[Filter a]-\u003e[Update a]-\u003eb()",
          "package": "persistent",
          "partial": "Where",
          "signature": "[Filter val]-\u003e[Update val]-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Class.html#v:updateWhere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Quasi",
          "name": "Quasi",
          "package": "persistent",
          "source": "src/Database-Persist-Quasi.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database Persist Quasi",
          "module": "Database.Persist.Quasi",
          "name": "Quasi",
          "package": "persistent",
          "partial": "Quasi",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Quasi.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Quasi",
          "name": "PersistSettings",
          "package": "persistent",
          "source": "src/Database-Persist-Quasi.html#PersistSettings",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Persist Quasi",
          "module": "Database.Persist.Quasi",
          "name": "PersistSettings",
          "package": "persistent",
          "partial": "Persist Settings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Quasi.html#t:PersistSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Quasi",
          "name": "PersistSettings",
          "package": "persistent",
          "signature": "PersistSettings",
          "source": "src/Database-Persist-Quasi.html#PersistSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Quasi",
          "module": "Database.Persist.Quasi",
          "name": "PersistSettings",
          "package": "persistent",
          "partial": "Persist Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Quasi.html#v:PersistSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Quasi",
          "name": "lowerCaseSettings",
          "package": "persistent",
          "signature": "PersistSettings",
          "source": "src/Database-Persist-Quasi.html#lowerCaseSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Quasi",
          "module": "Database.Persist.Quasi",
          "name": "lowerCaseSettings",
          "package": "persistent",
          "partial": "Case Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Quasi.html#v:lowerCaseSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Quasi",
          "name": "nullable",
          "package": "persistent",
          "signature": "[Text] -\u003e IsNullable",
          "source": "src/Database-Persist-Quasi.html#nullable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Quasi",
          "module": "Database.Persist.Quasi",
          "name": "nullable",
          "normalized": "[Text]-\u003eIsNullable",
          "package": "persistent",
          "signature": "[Text]-\u003eIsNullable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Quasi.html#v:nullable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a quasi-quoted syntax into a list of entity definitions.\n\u003c/p\u003e",
          "module": "Database.Persist.Quasi",
          "name": "parse",
          "package": "persistent",
          "signature": "PersistSettings -\u003e Text -\u003e [EntityDef ()]",
          "source": "src/Database-Persist-Quasi.html#parse",
          "type": "function"
        },
        "index": {
          "description": "Parses quasi-quoted syntax into list of entity definitions",
          "hierarchy": "Database Persist Quasi",
          "module": "Database.Persist.Quasi",
          "name": "parse",
          "normalized": "PersistSettings-\u003eText-\u003e[EntityDef()]",
          "package": "persistent",
          "signature": "PersistSettings-\u003eText-\u003e[EntityDef()]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Quasi.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether fields are by default strict. Default value: \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 1.2\n\u003c/p\u003e",
          "module": "Database.Persist.Quasi",
          "name": "psStrictFields",
          "package": "persistent",
          "signature": "Bool",
          "source": "src/Database-Persist-Quasi.html#PersistSettings",
          "type": "function"
        },
        "index": {
          "description": "Whether fields are by default strict Default value True Since",
          "hierarchy": "Database Persist Quasi",
          "module": "Database.Persist.Quasi",
          "name": "psStrictFields",
          "package": "persistent",
          "partial": "Strict Fields",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Quasi.html#v:psStrictFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Quasi",
          "name": "psToDBName",
          "package": "persistent",
          "signature": "(Text -\u003e Text)",
          "source": "src/Database-Persist-Quasi.html#PersistSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Quasi",
          "module": "Database.Persist.Quasi",
          "name": "psToDBName",
          "normalized": "(Text-\u003eText)",
          "package": "persistent",
          "partial": "To DBName",
          "signature": "(Text-\u003eText)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Quasi.html#v:psToDBName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Quasi",
          "name": "stripId",
          "package": "persistent",
          "signature": "FieldType -\u003e Maybe Text",
          "source": "src/Database-Persist-Quasi.html#stripId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Quasi",
          "module": "Database.Persist.Quasi",
          "name": "stripId",
          "normalized": "FieldType-\u003eMaybe Text",
          "package": "persistent",
          "partial": "Id",
          "signature": "FieldType-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Quasi.html#v:stripId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Quasi",
          "name": "upperCaseSettings",
          "package": "persistent",
          "signature": "PersistSettings",
          "source": "src/Database-Persist-Quasi.html#upperCaseSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Quasi",
          "module": "Database.Persist.Quasi",
          "name": "upperCaseSettings",
          "package": "persistent",
          "partial": "Case Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Quasi.html#v:upperCaseSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "Sql",
          "package": "persistent",
          "source": "src/Database-Persist-Sql.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "Sql",
          "package": "persistent",
          "partial": "Sql",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "CautiousMigration",
          "package": "persistent",
          "source": "src/Database-Persist-Sql-Types.html#CautiousMigration",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "CautiousMigration",
          "package": "persistent",
          "partial": "Cautious Migration",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#t:CautiousMigration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "Column",
          "package": "persistent",
          "source": "src/Database-Persist-Sql-Types.html#Column",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "Column",
          "package": "persistent",
          "partial": "Column",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#t:Column"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "Connection",
          "package": "persistent",
          "source": "src/Database-Persist-Sql-Types.html#Connection",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "Connection",
          "package": "persistent",
          "partial": "Connection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#t:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "ConnectionPool",
          "package": "persistent",
          "source": "src/Database-Persist-Sql-Types.html#ConnectionPool",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "ConnectionPool",
          "package": "persistent",
          "partial": "Connection Pool",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#t:ConnectionPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "InsertSqlResult",
          "package": "persistent",
          "source": "src/Database-Persist-Sql-Types.html#InsertSqlResult",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "InsertSqlResult",
          "package": "persistent",
          "partial": "Insert Sql Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#t:InsertSqlResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "Migration",
          "package": "persistent",
          "source": "src/Database-Persist-Sql-Types.html#Migration",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "Migration",
          "package": "persistent",
          "partial": "Migration",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#t:Migration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "MonadSqlPersist",
          "package": "persistent",
          "source": "src/Database-Persist-Sql-Class.html#MonadSqlPersist",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "MonadSqlPersist",
          "package": "persistent",
          "partial": "Monad Sql Persist",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#t:MonadSqlPersist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "PersistFieldSql",
          "package": "persistent",
          "source": "src/Database-Persist-Sql-Class.html#PersistFieldSql",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "PersistFieldSql",
          "package": "persistent",
          "partial": "Persist Field Sql",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#t:PersistFieldSql"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "PersistentSqlException",
          "package": "persistent",
          "source": "src/Database-Persist-Sql-Types.html#PersistentSqlException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "PersistentSqlException",
          "package": "persistent",
          "partial": "Persistent Sql Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#t:PersistentSqlException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for data types that may be retrived from a \u003ccode\u003erawSql\u003c/code\u003e\n query.\n\u003c/p\u003e",
          "module": "Database.Persist.Sql",
          "name": "RawSql",
          "package": "persistent",
          "source": "src/Database-Persist-Sql-Class.html#RawSql",
          "type": "class"
        },
        "index": {
          "description": "Class for data types that may be retrived from rawSql query",
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "RawSql",
          "package": "persistent",
          "partial": "Raw Sql",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#t:RawSql"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single column (see \u003ccode\u003erawSql\u003c/code\u003e).  Any \u003ccode\u003ePersistField\u003c/code\u003e may be\n used here, including \u003ccode\u003e\u003ca\u003ePersistValue\u003c/a\u003e\u003c/code\u003e (which does not do any\n processing).\n\u003c/p\u003e",
          "module": "Database.Persist.Sql",
          "name": "Single",
          "package": "persistent",
          "source": "src/Database-Persist-Sql-Types.html#Single",
          "type": "newtype"
        },
        "index": {
          "description": "single column see rawSql Any PersistField may be used here including PersistValue which does not do any processing",
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "Single",
          "package": "persistent",
          "partial": "Single",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#t:Single"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "Sql",
          "package": "persistent",
          "source": "src/Database-Persist-Sql-Types.html#Sql",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "Sql",
          "package": "persistent",
          "partial": "Sql",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#t:Sql"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "SqlBackend",
          "package": "persistent",
          "source": "src/Database-Persist-Sql-Types.html#SqlBackend",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "SqlBackend",
          "package": "persistent",
          "partial": "Sql Backend",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#t:SqlBackend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Please use SqlPersistT instead\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.Persist.Sql",
          "name": "SqlPersist",
          "package": "persistent",
          "source": "src/Database-Persist-Sql-Types.html#SqlPersist",
          "type": "type"
        },
        "index": {
          "description": "Deprecated Please use SqlPersistT instead",
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "SqlPersist",
          "package": "persistent",
          "partial": "Sql Persist",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#t:SqlPersist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "SqlPersistM",
          "package": "persistent",
          "source": "src/Database-Persist-Sql-Types.html#SqlPersistM",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "SqlPersistM",
          "package": "persistent",
          "partial": "Sql Persist",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#t:SqlPersistM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "SqlPersistT",
          "package": "persistent",
          "source": "src/Database-Persist-Sql-Types.html#SqlPersistT",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "SqlPersistT",
          "package": "persistent",
          "partial": "Sql Persist",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#t:SqlPersistT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "Statement",
          "package": "persistent",
          "source": "src/Database-Persist-Sql-Types.html#Statement",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "Statement",
          "package": "persistent",
          "partial": "Statement",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#t:Statement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "Column",
          "package": "persistent",
          "signature": "Column",
          "source": "src/Database-Persist-Sql-Types.html#Column",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "Column",
          "package": "persistent",
          "partial": "Column",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:Column"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "Connection",
          "package": "persistent",
          "signature": "Connection",
          "source": "src/Database-Persist-Sql-Types.html#Connection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "Connection",
          "package": "persistent",
          "partial": "Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "Couldn'tGetSQLConnection",
          "package": "persistent",
          "signature": "Couldn'tGetSQLConnection",
          "source": "src/Database-Persist-Sql-Types.html#PersistentSqlException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "Couldn'tGetSQLConnection",
          "package": "persistent",
          "partial": "Couldn't Get SQLConnection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:Couldn-39-tGetSQLConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "ISRInsertGet",
          "package": "persistent",
          "signature": "ISRInsertGet Text Text",
          "source": "src/Database-Persist-Sql-Types.html#InsertSqlResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "ISRInsertGet",
          "package": "persistent",
          "partial": "ISRInsert Get",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:ISRInsertGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "ISRManyKeys",
          "package": "persistent",
          "signature": "ISRManyKeys Text [PersistValue]",
          "source": "src/Database-Persist-Sql-Types.html#InsertSqlResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "ISRManyKeys",
          "normalized": "ISRManyKeys Text[PersistValue]",
          "package": "persistent",
          "partial": "ISRMany Keys",
          "signature": "ISRManyKeys Text[PersistValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:ISRManyKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "ISRSingle",
          "package": "persistent",
          "signature": "ISRSingle Text",
          "source": "src/Database-Persist-Sql-Types.html#InsertSqlResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "ISRSingle",
          "package": "persistent",
          "partial": "ISRSingle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:ISRSingle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "Single",
          "package": "persistent",
          "signature": "Single",
          "source": "src/Database-Persist-Sql-Types.html#Single",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "Single",
          "package": "persistent",
          "partial": "Single",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:Single"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "SqlPersistT",
          "package": "persistent",
          "signature": "SqlPersistT",
          "source": "src/Database-Persist-Sql-Types.html#SqlPersistT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "SqlPersistT",
          "package": "persistent",
          "partial": "Sql Persist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:SqlPersistT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "Statement",
          "package": "persistent",
          "signature": "Statement",
          "source": "src/Database-Persist-Sql-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "Statement",
          "package": "persistent",
          "partial": "Statement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:Statement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "StatementAlreadyFinalized",
          "package": "persistent",
          "signature": "StatementAlreadyFinalized Text",
          "source": "src/Database-Persist-Sql-Types.html#PersistentSqlException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "StatementAlreadyFinalized",
          "package": "persistent",
          "partial": "Statement Already Finalized",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:StatementAlreadyFinalized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "askSqlConn",
          "package": "persistent",
          "signature": "m Connection",
          "source": "src/Database-Persist-Sql-Class.html#askSqlConn",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "askSqlConn",
          "package": "persistent",
          "partial": "Sql Conn",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:askSqlConn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "cDefault",
          "package": "persistent",
          "signature": "(Maybe Text)",
          "source": "src/Database-Persist-Sql-Types.html#Column",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "cDefault",
          "package": "persistent",
          "partial": "Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:cDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "cDefaultConstraintName",
          "package": "persistent",
          "signature": "(Maybe DBName)",
          "source": "src/Database-Persist-Sql-Types.html#Column",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "cDefaultConstraintName",
          "package": "persistent",
          "partial": "Default Constraint Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:cDefaultConstraintName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "cMaxLen",
          "package": "persistent",
          "signature": "(Maybe Integer)",
          "source": "src/Database-Persist-Sql-Types.html#Column",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "cMaxLen",
          "package": "persistent",
          "partial": "Max Len",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:cMaxLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "cName",
          "package": "persistent",
          "signature": "DBName",
          "source": "src/Database-Persist-Sql-Types.html#Column",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "cName",
          "package": "persistent",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:cName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "cNull",
          "package": "persistent",
          "signature": "Bool",
          "source": "src/Database-Persist-Sql-Types.html#Column",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "cNull",
          "package": "persistent",
          "partial": "Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:cNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "cReference",
          "package": "persistent",
          "signature": "(Maybe (DBName, DBName))",
          "source": "src/Database-Persist-Sql-Types.html#Column",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "cReference",
          "normalized": "(Maybe(DBName,DBName))",
          "package": "persistent",
          "partial": "Reference",
          "signature": "(Maybe(DBName,DBName))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:cReference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "cSqlType",
          "package": "persistent",
          "signature": "SqlType",
          "source": "src/Database-Persist-Sql-Types.html#Column",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "cSqlType",
          "package": "persistent",
          "partial": "Sql Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:cSqlType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "close'",
          "package": "persistent",
          "signature": "Connection -\u003e IO ()",
          "source": "src/Database-Persist-Sql-Run.html#close%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "close'",
          "normalized": "Connection-\u003eIO()",
          "package": "persistent",
          "signature": "Connection-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:close-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "connBegin",
          "package": "persistent",
          "signature": "(Text -\u003e IO Statement) -\u003e IO ()",
          "source": "src/Database-Persist-Sql-Types.html#Connection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "connBegin",
          "normalized": "(Text-\u003eIO Statement)-\u003eIO()",
          "package": "persistent",
          "partial": "Begin",
          "signature": "(Text-\u003eIO Statement)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:connBegin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "connClose",
          "package": "persistent",
          "signature": "IO ()",
          "source": "src/Database-Persist-Sql-Types.html#Connection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "connClose",
          "normalized": "IO()",
          "package": "persistent",
          "partial": "Close",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:connClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "connCommit",
          "package": "persistent",
          "signature": "(Text -\u003e IO Statement) -\u003e IO ()",
          "source": "src/Database-Persist-Sql-Types.html#Connection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "connCommit",
          "normalized": "(Text-\u003eIO Statement)-\u003eIO()",
          "package": "persistent",
          "partial": "Commit",
          "signature": "(Text-\u003eIO Statement)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:connCommit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "connEscapeName",
          "package": "persistent",
          "signature": "DBName -\u003e Text",
          "source": "src/Database-Persist-Sql-Types.html#Connection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "connEscapeName",
          "normalized": "DBName-\u003eText",
          "package": "persistent",
          "partial": "Escape Name",
          "signature": "DBName-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:connEscapeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etable name, column names, id name, either 1 or 2 statements to run\n\u003c/p\u003e",
          "module": "Database.Persist.Sql",
          "name": "connInsertSql",
          "package": "persistent",
          "signature": "EntityDef SqlType -\u003e [PersistValue] -\u003e InsertSqlResult",
          "source": "src/Database-Persist-Sql-Types.html#Connection",
          "type": "function"
        },
        "index": {
          "description": "table name column names id name either or statements to run",
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "connInsertSql",
          "normalized": "EntityDef SqlType-\u003e[PersistValue]-\u003eInsertSqlResult",
          "package": "persistent",
          "partial": "Insert Sql",
          "signature": "EntityDef SqlType-\u003e[PersistValue]-\u003eInsertSqlResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:connInsertSql"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "connLimitOffset",
          "package": "persistent",
          "signature": "(Int, Int) -\u003e Bool -\u003e Text -\u003e Text",
          "source": "src/Database-Persist-Sql-Types.html#Connection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "connLimitOffset",
          "normalized": "(Int,Int)-\u003eBool-\u003eText-\u003eText",
          "package": "persistent",
          "partial": "Limit Offset",
          "signature": "(Int,Int)-\u003eBool-\u003eText-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:connLimitOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "connMigrateSql",
          "package": "persistent",
          "signature": "[EntityDef SqlType] -\u003e (Text -\u003e IO Statement) -\u003e EntityDef SqlType -\u003e IO (Either [Text] [(Bool, Text)])",
          "source": "src/Database-Persist-Sql-Types.html#Connection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "connMigrateSql",
          "normalized": "[EntityDef SqlType]-\u003e(Text-\u003eIO Statement)-\u003eEntityDef SqlType-\u003eIO(Either[Text][(Bool,Text)])",
          "package": "persistent",
          "partial": "Migrate Sql",
          "signature": "[EntityDef SqlType]-\u003e(Text-\u003eIO Statement)-\u003eEntityDef SqlType-\u003eIO(Either[Text][(Bool,Text)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:connMigrateSql"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "connNoLimit",
          "package": "persistent",
          "signature": "Text",
          "source": "src/Database-Persist-Sql-Types.html#Connection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "connNoLimit",
          "package": "persistent",
          "partial": "No Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:connNoLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "connPrepare",
          "package": "persistent",
          "signature": "Text -\u003e IO Statement",
          "source": "src/Database-Persist-Sql-Types.html#Connection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "connPrepare",
          "normalized": "Text-\u003eIO Statement",
          "package": "persistent",
          "partial": "Prepare",
          "signature": "Text-\u003eIO Statement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:connPrepare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "connRDBMS",
          "package": "persistent",
          "signature": "Text",
          "source": "src/Database-Persist-Sql-Types.html#Connection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "connRDBMS",
          "package": "persistent",
          "partial": "RDBMS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:connRDBMS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "connRollback",
          "package": "persistent",
          "signature": "(Text -\u003e IO Statement) -\u003e IO ()",
          "source": "src/Database-Persist-Sql-Types.html#Connection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "connRollback",
          "normalized": "(Text-\u003eIO Statement)-\u003eIO()",
          "package": "persistent",
          "partial": "Rollback",
          "signature": "(Text-\u003eIO Statement)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:connRollback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "connStmtMap",
          "package": "persistent",
          "signature": "IORef (Map Text Statement)",
          "source": "src/Database-Persist-Sql-Types.html#Connection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "connStmtMap",
          "package": "persistent",
          "partial": "Stmt Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:connStmtMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "convertKey",
          "package": "persistent",
          "signature": "Bool -\u003e KeyBackend t t1 -\u003e [PersistValue]",
          "source": "src/Database-Persist-Sql-Internal.html#convertKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "convertKey",
          "normalized": "Bool-\u003eKeyBackend a a-\u003e[PersistValue]",
          "package": "persistent",
          "partial": "Key",
          "signature": "Bool-\u003eKeyBackend t t-\u003e[PersistValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:convertKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "createSqlPool",
          "package": "persistent",
          "signature": "IO Connection -\u003e Int -\u003e m (Pool Connection)",
          "source": "src/Database-Persist-Sql-Run.html#createSqlPool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "createSqlPool",
          "normalized": "IO Connection-\u003eInt-\u003ea(Pool Connection)",
          "package": "persistent",
          "partial": "Sql Pool",
          "signature": "IO Connection-\u003eInt-\u003em(Pool Connection)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:createSqlPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates sql for limit and offset for postgres, sqlite and mysql.\n\u003c/p\u003e",
          "module": "Database.Persist.Sql",
          "name": "decorateSQLWithLimitOffset",
          "package": "persistent",
          "signature": "Text -\u003e (Int, Int) -\u003e Bool -\u003e Text -\u003e Text",
          "source": "src/Database-Persist-Sql-Orphan-PersistQuery.html#decorateSQLWithLimitOffset",
          "type": "function"
        },
        "index": {
          "description": "Generates sql for limit and offset for postgres sqlite and mysql",
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "decorateSQLWithLimitOffset",
          "normalized": "Text-\u003e(Int,Int)-\u003eBool-\u003eText-\u003eText",
          "package": "persistent",
          "partial": "SQLWith Limit Offset",
          "signature": "Text-\u003e(Int,Int)-\u003eBool-\u003eText-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:decorateSQLWithLimitOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003edeleteWhere\u003c/a\u003e\u003c/code\u003e, but returns the number of rows affected.\n\u003c/p\u003e\u003cp\u003eSince 1.1.5\n\u003c/p\u003e",
          "module": "Database.Persist.Sql",
          "name": "deleteWhereCount",
          "package": "persistent",
          "signature": "[Filter val] -\u003e m Int64",
          "source": "src/Database-Persist-Sql-Orphan-PersistQuery.html#deleteWhereCount",
          "type": "function"
        },
        "index": {
          "description": "Same as deleteWhere but returns the number of rows affected Since",
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "deleteWhereCount",
          "normalized": "[Filter a]-\u003eb Int",
          "package": "persistent",
          "partial": "Where Count",
          "signature": "[Filter val]-\u003em Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:deleteWhereCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "getMigration",
          "package": "persistent",
          "signature": "Migration m -\u003e m [Sql]",
          "source": "src/Database-Persist-Sql-Migration.html#getMigration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "getMigration",
          "normalized": "Migration a-\u003ea[Sql]",
          "package": "persistent",
          "partial": "Migration",
          "signature": "Migration m-\u003em[Sql]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:getMigration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "getStmtConn",
          "package": "persistent",
          "signature": "Connection -\u003e Text -\u003e IO Statement",
          "source": "src/Database-Persist-Sql-Raw.html#getStmtConn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "getStmtConn",
          "normalized": "Connection-\u003eText-\u003eIO Statement",
          "package": "persistent",
          "partial": "Stmt Conn",
          "signature": "Connection-\u003eText-\u003eIO Statement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:getStmtConn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "migrate",
          "package": "persistent",
          "signature": "[EntityDef SqlType] -\u003e EntityDef SqlType -\u003e Migration m",
          "source": "src/Database-Persist-Sql-Migration.html#migrate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "migrate",
          "normalized": "[EntityDef SqlType]-\u003eEntityDef SqlType-\u003eMigration a",
          "package": "persistent",
          "signature": "[EntityDef SqlType]-\u003eEntityDef SqlType-\u003eMigration m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:migrate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate the list of columns for the given entity.\n\u003c/p\u003e",
          "module": "Database.Persist.Sql",
          "name": "mkColumns",
          "package": "persistent",
          "signature": "[EntityDef a] -\u003e EntityDef SqlType -\u003e ([Column], [UniqueDef], [ForeignDef])",
          "source": "src/Database-Persist-Sql-Internal.html#mkColumns",
          "type": "function"
        },
        "index": {
          "description": "Create the list of columns for the given entity",
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "mkColumns",
          "normalized": "[EntityDef a]-\u003eEntityDef SqlType-\u003e([Column],[UniqueDef],[ForeignDef])",
          "package": "persistent",
          "partial": "Columns",
          "signature": "[EntityDef a]-\u003eEntityDef SqlType-\u003e([Column],[UniqueDef],[ForeignDef])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:mkColumns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "parseMigration",
          "package": "persistent",
          "signature": "Migration m -\u003e m (Either [Text] CautiousMigration)",
          "source": "src/Database-Persist-Sql-Migration.html#parseMigration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "parseMigration",
          "normalized": "Migration a-\u003ea(Either[Text]CautiousMigration)",
          "package": "persistent",
          "partial": "Migration",
          "signature": "Migration m-\u003em(Either[Text]CautiousMigration)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:parseMigration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "parseMigration'",
          "package": "persistent",
          "signature": "Migration m -\u003e m CautiousMigration",
          "source": "src/Database-Persist-Sql-Migration.html#parseMigration%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "parseMigration'",
          "normalized": "Migration a-\u003ea CautiousMigration",
          "package": "persistent",
          "partial": "Migration'",
          "signature": "Migration m-\u003em CautiousMigration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:parseMigration-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "printMigration",
          "package": "persistent",
          "signature": "Migration m -\u003e m ()",
          "source": "src/Database-Persist-Sql-Migration.html#printMigration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "printMigration",
          "normalized": "Migration a-\u003ea()",
          "package": "persistent",
          "partial": "Migration",
          "signature": "Migration m-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:printMigration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "rawExecute",
          "package": "persistent",
          "signature": "Text -\u003e [PersistValue] -\u003e m ()",
          "source": "src/Database-Persist-Sql-Raw.html#rawExecute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "rawExecute",
          "normalized": "Text-\u003e[PersistValue]-\u003ea()",
          "package": "persistent",
          "partial": "Execute",
          "signature": "Text-\u003e[PersistValue]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:rawExecute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "rawExecuteCount",
          "package": "persistent",
          "signature": "Text -\u003e [PersistValue] -\u003e m Int64",
          "source": "src/Database-Persist-Sql-Raw.html#rawExecuteCount",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "rawExecuteCount",
          "normalized": "Text-\u003e[PersistValue]-\u003ea Int",
          "package": "persistent",
          "partial": "Execute Count",
          "signature": "Text-\u003e[PersistValue]-\u003em Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:rawExecuteCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "rawQuery",
          "package": "persistent",
          "signature": "Text -\u003e [PersistValue] -\u003e Source m [PersistValue]",
          "source": "src/Database-Persist-Sql-Raw.html#rawQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "rawQuery",
          "normalized": "Text-\u003e[PersistValue]-\u003eSource a[PersistValue]",
          "package": "persistent",
          "partial": "Query",
          "signature": "Text-\u003e[PersistValue]-\u003eSource m[PersistValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:rawQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a raw SQL statement and return its results as a\n list.\n\u003c/p\u003e\u003cp\u003eIf you're using \u003ccode\u003e\u003ca\u003eEntity\u003c/a\u003e\u003c/code\u003e\u003ccode\u003es\u003c/code\u003e (which is quite likely), then you\n \u003cem\u003emust\u003c/em\u003e use entity selection placeholders (double question\n mark, \u003ccode\u003e??\u003c/code\u003e).  These \u003ccode\u003e??\u003c/code\u003e placeholders are then replaced for\n the names of the columns that we need for your entities.\n You'll receive an error if you don't use the placeholders.\n Please see the \u003ccode\u003e\u003ca\u003eEntity\u003c/a\u003e\u003c/code\u003e\u003ccode\u003es\u003c/code\u003e documentation for more details.\n\u003c/p\u003e\u003cp\u003eYou may put value placeholders (question marks, \u003ccode\u003e?\u003c/code\u003e) in your\n SQL query.  These placeholders are then replaced by the values\n you pass on the second parameter, already correctly escaped.\n You may want to use \u003ccode\u003e\u003ca\u003etoPersistValue\u003c/a\u003e\u003c/code\u003e to help you constructing\n the placeholder values.\n\u003c/p\u003e\u003cp\u003eSince you're giving a raw SQL statement, you don't get any\n guarantees regarding safety.  If \u003ccode\u003e\u003ca\u003erawSql\u003c/a\u003e\u003c/code\u003e is not able to parse\n the results of your query back, then an exception is raised.\n However, most common problems are mitigated by using the\n entity selection placeholder \u003ccode\u003e??\u003c/code\u003e, and you shouldn't see any\n error at all if you're not using \u003ccode\u003e\u003ca\u003eSingle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.Persist.Sql",
          "name": "rawSql",
          "package": "persistent",
          "signature": "Text-\u003e [PersistValue]-\u003e m [a]",
          "type": "function"
        },
        "index": {
          "description": "Execute raw SQL statement and return its results as list If you re using Entity which is quite likely then you must use entity selection placeholders double question mark These placeholders are then replaced for the names of the columns that we need for your entities You ll receive an error if you don use the placeholders Please see the Entity documentation for more details You may put value placeholders question marks in your SQL query These placeholders are then replaced by the values you pass on the second parameter already correctly escaped You may want to use toPersistValue to help you constructing the placeholder values Since you re giving raw SQL statement you don get any guarantees regarding safety If rawSql is not able to parse the results of your query back then an exception is raised However most common problems are mitigated by using the entity selection placeholder and you shouldn see any error at all if you re not using Single",
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "rawSql",
          "normalized": "Text-\u003e[PersistValue]-\u003ea[b]",
          "package": "persistent",
          "partial": "Sql",
          "signature": "Text-\u003e[PersistValue]-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:rawSql"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA string telling the user why the column count is what\n it is.\n\u003c/p\u003e",
          "module": "Database.Persist.Sql",
          "name": "rawSqlColCountReason",
          "package": "persistent",
          "signature": "a -\u003e String",
          "source": "src/Database-Persist-Sql-Class.html#rawSqlColCountReason",
          "type": "method"
        },
        "index": {
          "description": "string telling the user why the column count is what it is",
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "rawSqlColCountReason",
          "normalized": "a-\u003eString",
          "package": "persistent",
          "partial": "Sql Col Count Reason",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:rawSqlColCountReason"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of columns that this data type needs and the list\n of substitutions for \u003ccode\u003eSELECT\u003c/code\u003e placeholders \u003ccode\u003e??\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.Persist.Sql",
          "name": "rawSqlCols",
          "package": "persistent",
          "signature": "(DBName -\u003e Text) -\u003e a -\u003e (Int, [Text])",
          "source": "src/Database-Persist-Sql-Class.html#rawSqlCols",
          "type": "method"
        },
        "index": {
          "description": "Number of columns that this data type needs and the list of substitutions for SELECT placeholders",
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "rawSqlCols",
          "normalized": "(DBName-\u003eText)-\u003ea-\u003e(Int,[Text])",
          "package": "persistent",
          "partial": "Sql Cols",
          "signature": "(DBName-\u003eText)-\u003ea-\u003e(Int,[Text])",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:rawSqlCols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform a row of the result into the data type.\n\u003c/p\u003e",
          "module": "Database.Persist.Sql",
          "name": "rawSqlProcessRow",
          "package": "persistent",
          "signature": "[PersistValue] -\u003e Either Text a",
          "source": "src/Database-Persist-Sql-Class.html#rawSqlProcessRow",
          "type": "method"
        },
        "index": {
          "description": "Transform row of the result into the data type",
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "rawSqlProcessRow",
          "normalized": "[PersistValue]-\u003eEither Text a",
          "package": "persistent",
          "partial": "Sql Process Row",
          "signature": "[PersistValue]-\u003eEither Text a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:rawSqlProcessRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "runMigration",
          "package": "persistent",
          "signature": "Migration m -\u003e m ()",
          "source": "src/Database-Persist-Sql-Migration.html#runMigration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "runMigration",
          "normalized": "Migration a-\u003ea()",
          "package": "persistent",
          "partial": "Migration",
          "signature": "Migration m-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:runMigration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003erunMigration\u003c/a\u003e\u003c/code\u003e, but returns a list of the SQL commands executed\n instead of printing them to stderr.\n\u003c/p\u003e",
          "module": "Database.Persist.Sql",
          "name": "runMigrationSilent",
          "package": "persistent",
          "signature": "Migration m -\u003e m [Text]",
          "source": "src/Database-Persist-Sql-Migration.html#runMigrationSilent",
          "type": "function"
        },
        "index": {
          "description": "Same as runMigration but returns list of the SQL commands executed instead of printing them to stderr",
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "runMigrationSilent",
          "normalized": "Migration a-\u003ea[Text]",
          "package": "persistent",
          "partial": "Migration Silent",
          "signature": "Migration m-\u003em[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:runMigrationSilent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "runMigrationUnsafe",
          "package": "persistent",
          "signature": "Migration m -\u003e m ()",
          "source": "src/Database-Persist-Sql-Migration.html#runMigrationUnsafe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "runMigrationUnsafe",
          "normalized": "Migration a-\u003ea()",
          "package": "persistent",
          "partial": "Migration Unsafe",
          "signature": "Migration m-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:runMigrationUnsafe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "runSqlConn",
          "package": "persistent",
          "signature": "SqlPersistT m a -\u003e Connection -\u003e m a",
          "source": "src/Database-Persist-Sql-Run.html#runSqlConn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "runSqlConn",
          "normalized": "SqlPersistT a b-\u003eConnection-\u003ea b",
          "package": "persistent",
          "partial": "Sql Conn",
          "signature": "SqlPersistT m a-\u003eConnection-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:runSqlConn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "runSqlPersistM",
          "package": "persistent",
          "signature": "SqlPersistM a -\u003e Connection -\u003e IO a",
          "source": "src/Database-Persist-Sql-Run.html#runSqlPersistM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "runSqlPersistM",
          "normalized": "SqlPersistM a-\u003eConnection-\u003eIO a",
          "package": "persistent",
          "partial": "Sql Persist",
          "signature": "SqlPersistM a-\u003eConnection-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:runSqlPersistM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "runSqlPersistMPool",
          "package": "persistent",
          "signature": "SqlPersistM a -\u003e Pool Connection -\u003e IO a",
          "source": "src/Database-Persist-Sql-Run.html#runSqlPersistMPool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "runSqlPersistMPool",
          "normalized": "SqlPersistM a-\u003ePool Connection-\u003eIO a",
          "package": "persistent",
          "partial": "Sql Persist MPool",
          "signature": "SqlPersistM a-\u003ePool Connection-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:runSqlPersistMPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a connection from the pool, run the given action, and then return the\n connection to the pool.\n\u003c/p\u003e",
          "module": "Database.Persist.Sql",
          "name": "runSqlPool",
          "package": "persistent",
          "signature": "SqlPersistT m a -\u003e Pool Connection -\u003e m a",
          "source": "src/Database-Persist-Sql-Run.html#runSqlPool",
          "type": "function"
        },
        "index": {
          "description": "Get connection from the pool run the given action and then return the connection to the pool",
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "runSqlPool",
          "normalized": "SqlPersistT a b-\u003ePool Connection-\u003ea b",
          "package": "persistent",
          "partial": "Sql Pool",
          "signature": "SqlPersistT m a-\u003ePool Connection-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:runSqlPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "sqlType",
          "package": "persistent",
          "signature": "m a -\u003e SqlType",
          "source": "src/Database-Persist-Sql-Class.html#sqlType",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "sqlType",
          "normalized": "a b-\u003eSqlType",
          "package": "persistent",
          "partial": "Type",
          "signature": "m a-\u003eSqlType",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:sqlType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "stmtExecute",
          "package": "persistent",
          "signature": "[PersistValue] -\u003e IO Int64",
          "source": "src/Database-Persist-Sql-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "stmtExecute",
          "normalized": "[PersistValue]-\u003eIO Int",
          "package": "persistent",
          "partial": "Execute",
          "signature": "[PersistValue]-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:stmtExecute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "stmtFinalize",
          "package": "persistent",
          "signature": "IO ()",
          "source": "src/Database-Persist-Sql-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "stmtFinalize",
          "normalized": "IO()",
          "package": "persistent",
          "partial": "Finalize",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:stmtFinalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "stmtQuery",
          "package": "persistent",
          "signature": "[PersistValue] -\u003e Source m [PersistValue]",
          "source": "src/Database-Persist-Sql-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "stmtQuery",
          "normalized": "[PersistValue]-\u003eSource a[PersistValue]",
          "package": "persistent",
          "partial": "Query",
          "signature": "[PersistValue]-\u003eSource m[PersistValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:stmtQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "stmtReset",
          "package": "persistent",
          "signature": "IO ()",
          "source": "src/Database-Persist-Sql-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "stmtReset",
          "normalized": "IO()",
          "package": "persistent",
          "partial": "Reset",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:stmtReset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommit the current transaction and begin a new one.\n\u003c/p\u003e\u003cp\u003eSince 1.2.0\n\u003c/p\u003e",
          "module": "Database.Persist.Sql",
          "name": "transactionSave",
          "package": "persistent",
          "signature": "m ()",
          "source": "src/Database-Persist-Sql.html#transactionSave",
          "type": "function"
        },
        "index": {
          "description": "Commit the current transaction and begin new one Since",
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "transactionSave",
          "normalized": "a()",
          "package": "persistent",
          "partial": "Save",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:transactionSave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoll back the current transaction and begin a new one.\n\u003c/p\u003e\u003cp\u003eSince 1.2.0\n\u003c/p\u003e",
          "module": "Database.Persist.Sql",
          "name": "transactionUndo",
          "package": "persistent",
          "signature": "m ()",
          "source": "src/Database-Persist-Sql.html#transactionUndo",
          "type": "function"
        },
        "index": {
          "description": "Roll back the current transaction and begin new one Since",
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "transactionUndo",
          "normalized": "a()",
          "package": "persistent",
          "partial": "Undo",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:transactionUndo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "unSingle",
          "package": "persistent",
          "signature": "a",
          "source": "src/Database-Persist-Sql-Types.html#Single",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "unSingle",
          "package": "persistent",
          "partial": "Single",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:unSingle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "unSqlPersistT",
          "package": "persistent",
          "signature": "ReaderT Connection m a",
          "source": "src/Database-Persist-Sql-Types.html#SqlPersistT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "unSqlPersistT",
          "package": "persistent",
          "partial": "Sql Persist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:unSqlPersistT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eupdateWhere\u003c/a\u003e\u003c/code\u003e, but returns the number of rows affected.\n\u003c/p\u003e\u003cp\u003eSince 1.1.5\n\u003c/p\u003e",
          "module": "Database.Persist.Sql",
          "name": "updateWhereCount",
          "package": "persistent",
          "signature": "[Filter val] -\u003e [Update val] -\u003e m Int64",
          "source": "src/Database-Persist-Sql-Orphan-PersistQuery.html#updateWhereCount",
          "type": "function"
        },
        "index": {
          "description": "Same as updateWhere but returns the number of rows affected Since",
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "updateWhereCount",
          "normalized": "[Filter a]-\u003e[Update a]-\u003eb Int",
          "package": "persistent",
          "partial": "Where Count",
          "signature": "[Filter val]-\u003e[Update val]-\u003em Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:updateWhereCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "withSqlConn",
          "package": "persistent",
          "signature": "IO Connection -\u003e (Connection -\u003e m a) -\u003e m a",
          "source": "src/Database-Persist-Sql-Run.html#withSqlConn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "withSqlConn",
          "normalized": "IO Connection-\u003e(Connection-\u003ea b)-\u003ea b",
          "package": "persistent",
          "partial": "Sql Conn",
          "signature": "IO Connection-\u003e(Connection-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:withSqlConn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sql",
          "name": "withSqlPool",
          "package": "persistent",
          "signature": "IO Connection-\u003e Int-\u003e (Pool Connection -\u003e m a)-\u003e m a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sql",
          "module": "Database.Persist.Sql",
          "name": "withSqlPool",
          "normalized": "IO Connection-\u003eInt-\u003e(Pool Connection-\u003ea b)-\u003ea b",
          "package": "persistent",
          "partial": "Sql Pool",
          "signature": "IO Connection-\u003eInt-\u003e(Pool Connection-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Sql.html#v:withSqlPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "Types",
          "package": "persistent",
          "source": "src/Database-Persist-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "Types",
          "package": "persistent",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "Attr",
          "package": "persistent",
          "source": "src/Database-Persist-Types-Base.html#Attr",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "Attr",
          "package": "persistent",
          "partial": "Attr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#t:Attr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "BackendSpecificFilter",
          "package": "persistent",
          "signature": "BackendSpecificFilter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "BackendSpecificFilter",
          "package": "persistent",
          "partial": "Backend Specific Filter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#t:BackendSpecificFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eCheckmark\u003c/a\u003e\u003c/code\u003e should be used as a field type whenever a\n uniqueness constraint should guarantee that a certain kind of\n record may appear at most once, but other kinds of records may\n appear any number of times.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNOTE:\u003c/em\u003e You need to mark any \u003ccode\u003eCheckmark\u003c/code\u003e fields as \u003ccode\u003enullable\u003c/code\u003e\n (see the following example).\n\u003c/p\u003e\u003cp\u003eFor example, suppose there's a \u003ccode\u003eLocation\u003c/code\u003e entity that\n represents where a user has lived:\n\u003c/p\u003e\u003cpre\u003e\n Location\n     user    UserId\n     name    Text\n     current Checkmark nullable\n\nUniqueLocation user current\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003eUniqueLocation\u003c/code\u003e constraint allows any number of\n \u003ccode\u003e\u003ca\u003eInactive\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eLocation\u003c/code\u003es to be \u003ccode\u003ecurrent\u003c/code\u003e.  However, there may be\n at most one \u003ccode\u003ecurrent\u003c/code\u003e \u003ccode\u003eLocation\u003c/code\u003e per user (i.e., either zero\n or one per user).\n\u003c/p\u003e\u003cp\u003eThis data type works because of the way that SQL treats\n \u003ccode\u003eNULL\u003c/code\u003eable fields within uniqueness constraints.  The SQL\n standard says that \u003ccode\u003eNULL\u003c/code\u003e values should be considered\n different, so we represent \u003ccode\u003e\u003ca\u003eInactive\u003c/a\u003e\u003c/code\u003e as SQL \u003ccode\u003eNULL\u003c/code\u003e, thus\n allowing any number of \u003ccode\u003e\u003ca\u003eInactive\u003c/a\u003e\u003c/code\u003e records.  On the other hand,\n we represent \u003ccode\u003e\u003ca\u003eActive\u003c/a\u003e\u003c/code\u003e as \u003ccode\u003eTRUE\u003c/code\u003e, so the uniqueness constraint\n will disallow more than one \u003ccode\u003e\u003ca\u003eActive\u003c/a\u003e\u003c/code\u003e record.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote:\u003c/em\u003e There may be DBMSs that do not respect the SQL\n standard's treatment of \u003ccode\u003eNULL\u003c/code\u003e values on uniqueness\n constraints, please check if this data type works before\n relying on it.\n\u003c/p\u003e\u003cp\u003eThe SQL \u003ccode\u003eBOOLEAN\u003c/code\u003e type is used because it's the smallest data\n type available.  Note that we never use \u003ccode\u003eFALSE\u003c/code\u003e, just \u003ccode\u003eTRUE\u003c/code\u003e\n and \u003ccode\u003eNULL\u003c/code\u003e.  Provides the same behavior \u003ccode\u003eMaybe ()\u003c/code\u003e would if\n \u003ccode\u003e()\u003c/code\u003e was a valid \u003ccode\u003ePersistField\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.Persist.Types",
          "name": "Checkmark",
          "package": "persistent",
          "source": "src/Database-Persist-Types-Base.html#Checkmark",
          "type": "data"
        },
        "index": {
          "description": "Checkmark should be used as field type whenever uniqueness constraint should guarantee that certain kind of record may appear at most once but other kinds of records may appear any number of times NOTE You need to mark any Checkmark fields as nullable see the following example For example suppose there Location entity that represents where user has lived Location user UserId name Text current Checkmark nullable UniqueLocation user current The UniqueLocation constraint allows any number of Inactive Location to be current However there may be at most one current Location per user i.e either zero or one per user This data type works because of the way that SQL treats NULL able fields within uniqueness constraints The SQL standard says that NULL values should be considered different so we represent Inactive as SQL NULL thus allowing any number of Inactive records On the other hand we represent Active as TRUE so the uniqueness constraint will disallow more than one Active record Note There may be DBMSs that do not respect the SQL standard treatment of NULL values on uniqueness constraints please check if this data type works before relying on it The SQL BOOLEAN type is used because it the smallest data type available Note that we never use FALSE just TRUE and NULL Provides the same behavior Maybe would if was valid PersistField",
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "Checkmark",
          "package": "persistent",
          "partial": "Checkmark",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#t:Checkmark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "DBName",
          "package": "persistent",
          "source": "src/Database-Persist-Types-Base.html#DBName",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "DBName",
          "package": "persistent",
          "partial": "DBName",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#t:DBName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatatype that represents an entity, with both its \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e and\n its Haskell record representation.\n\u003c/p\u003e\u003cp\u003eWhen using a SQL-based backend (such as SQLite or\n PostgreSQL), an \u003ccode\u003e\u003ca\u003eEntity\u003c/a\u003e\u003c/code\u003e may take any number of columns\n depending on how many fields it has. In order to reconstruct\n your entity on the Haskell side, \u003ccode\u003epersistent\u003c/code\u003e needs all of\n your entity columns and in the right order.  Note that you\n don't need to worry about this when using \u003ccode\u003epersistent\u003c/code\u003e's API\n since everything is handled correctly behind the scenes.\n\u003c/p\u003e\u003cp\u003eHowever, if you want to issue a raw SQL command that returns\n an \u003ccode\u003e\u003ca\u003eEntity\u003c/a\u003e\u003c/code\u003e, then you have to be careful with the column\n order.  While you could use \u003ccode\u003eSELECT Entity.* WHERE ...\u003c/code\u003e and\n that would work most of the time, there are times when the\n order of the columns on your database is different from the\n order that \u003ccode\u003epersistent\u003c/code\u003e expects (for example, if you add a new\n field in the middle of you entity definition and then use the\n migration code -- \u003ccode\u003epersistent\u003c/code\u003e will expect the column to be in\n the middle, but your DBMS will put it as the last column).\n So, instead of using a query like the one above, you may use\n \u003ccode\u003e\u003ca\u003erawSql\u003c/a\u003e\u003c/code\u003e (from the\n \u003ca\u003eDatabase.Persist.GenericSql\u003c/a\u003e module) with its /entity\n selection placeholder/ (a double question mark \u003ccode\u003e??\u003c/code\u003e).  Using\n \u003ccode\u003erawSql\u003c/code\u003e the query above must be written as \u003ccode\u003eSELECT ??  WHERE\n ..\u003c/code\u003e.  Then \u003ccode\u003erawSql\u003c/code\u003e will replace \u003ccode\u003e??\u003c/code\u003e with the list of all\n columns that we need from your entity in the right order.  If\n your query returns two entities (i.e. \u003ccode\u003e(Entity backend a,\n Entity backend b)\u003c/code\u003e), then you must you use \u003ccode\u003eSELECT ??, ??\n WHERE ...\u003c/code\u003e, and so on.\n\u003c/p\u003e",
          "module": "Database.Persist.Types",
          "name": "Entity",
          "package": "persistent",
          "source": "src/Database-Persist-Class-PersistEntity.html#Entity",
          "type": "data"
        },
        "index": {
          "description": "Datatype that represents an entity with both its Key and its Haskell record representation When using SQL-based backend such as SQLite or PostgreSQL an Entity may take any number of columns depending on how many fields it has In order to reconstruct your entity on the Haskell side persistent needs all of your entity columns and in the right order Note that you don need to worry about this when using persistent API since everything is handled correctly behind the scenes However if you want to issue raw SQL command that returns an Entity then you have to be careful with the column order While you could use SELECT Entity WHERE and that would work most of the time there are times when the order of the columns on your database is different from the order that persistent expects for example if you add new field in the middle of you entity definition and then use the migration code persistent will expect the column to be in the middle but your DBMS will put it as the last column So instead of using query like the one above you may use rawSql from the Database.Persist.GenericSql module with its entity selection placeholder double question mark Using rawSql the query above must be written as SELECT WHERE Then rawSql will replace with the list of all columns that we need from your entity in the right order If your query returns two entities i.e Entity backend Entity backend then you must you use SELECT WHERE and so on",
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "Entity",
          "package": "persistent",
          "partial": "Entity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#t:Entity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "EntityDef",
          "package": "persistent",
          "source": "src/Database-Persist-Types-Base.html#EntityDef",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "EntityDef",
          "package": "persistent",
          "partial": "Entity Def",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#t:EntityDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "ExtraLine",
          "package": "persistent",
          "source": "src/Database-Persist-Types-Base.html#ExtraLine",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "ExtraLine",
          "package": "persistent",
          "partial": "Extra Line",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#t:ExtraLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "FieldDef",
          "package": "persistent",
          "source": "src/Database-Persist-Types-Base.html#FieldDef",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "FieldDef",
          "package": "persistent",
          "partial": "Field Def",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#t:FieldDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "FieldType",
          "package": "persistent",
          "source": "src/Database-Persist-Types-Base.html#FieldType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "FieldType",
          "package": "persistent",
          "partial": "Field Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#t:FieldType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilters which are available for \u003ccode\u003eselect\u003c/code\u003e, \u003ccode\u003eupdateWhere\u003c/code\u003e and\n \u003ccode\u003edeleteWhere\u003c/code\u003e. Each filter constructor specifies the field being\n filtered on, the type of comparison applied (equals, not equals, etc)\n and the argument for the comparison.\n\u003c/p\u003e\u003cp\u003ePersistent users use combinators to create these\n\u003c/p\u003e",
          "module": "Database.Persist.Types",
          "name": "Filter",
          "package": "persistent",
          "source": "src/Database-Persist-Class-PersistEntity.html#Filter",
          "type": "data"
        },
        "index": {
          "description": "Filters which are available for select updateWhere and deleteWhere Each filter constructor specifies the field being filtered on the type of comparison applied equals not equals etc and the argument for the comparison Persistent users use combinators to create these",
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "Filter",
          "package": "persistent",
          "partial": "Filter",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#t:Filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "ForeignDef",
          "package": "persistent",
          "source": "src/Database-Persist-Types-Base.html#ForeignDef",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "ForeignDef",
          "package": "persistent",
          "partial": "Foreign Def",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#t:ForeignDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "HaskellName",
          "package": "persistent",
          "source": "src/Database-Persist-Types-Base.html#HaskellName",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "HaskellName",
          "package": "persistent",
          "partial": "Haskell Name",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#t:HaskellName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "IsNullable",
          "package": "persistent",
          "source": "src/Database-Persist-Types-Base.html#IsNullable",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "IsNullable",
          "package": "persistent",
          "partial": "Is Nullable",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#t:IsNullable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper wrapper, equivalent to \u003ccode\u003eKey (PersistEntityBackend val) val\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 1.1.0\n\u003c/p\u003e",
          "module": "Database.Persist.Types",
          "name": "Key",
          "package": "persistent",
          "source": "src/Database-Persist-Class-PersistEntity.html#Key",
          "type": "type"
        },
        "index": {
          "description": "Helper wrapper equivalent to Key PersistEntityBackend val val Since",
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "Key",
          "package": "persistent",
          "partial": "Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "KeyBackend",
          "package": "persistent",
          "source": "src/Database-Persist-Types-Base.html#KeyBackend",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "KeyBackend",
          "package": "persistent",
          "partial": "Key Backend",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#t:KeyBackend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "KeyEntity",
          "package": "persistent",
          "signature": "KeyEntity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "KeyEntity",
          "package": "persistent",
          "partial": "Key Entity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#t:KeyEntity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "PersistException",
          "package": "persistent",
          "source": "src/Database-Persist-Types-Base.html#PersistException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "PersistException",
          "package": "persistent",
          "partial": "Persist Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#t:PersistException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "PersistFilter",
          "package": "persistent",
          "source": "src/Database-Persist-Types-Base.html#PersistFilter",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "PersistFilter",
          "package": "persistent",
          "partial": "Persist Filter",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#t:PersistFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "PersistUpdate",
          "package": "persistent",
          "source": "src/Database-Persist-Types-Base.html#PersistUpdate",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "PersistUpdate",
          "package": "persistent",
          "partial": "Persist Update",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#t:PersistUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA raw value which can be stored in any backend and can be marshalled to\n and from a \u003ccode\u003ePersistField\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.Persist.Types",
          "name": "PersistValue",
          "package": "persistent",
          "source": "src/Database-Persist-Types-Base.html#PersistValue",
          "type": "data"
        },
        "index": {
          "description": "raw value which can be stored in any backend and can be marshalled to and from PersistField",
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "PersistValue",
          "package": "persistent",
          "partial": "Persist Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#t:PersistValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "PrimaryDef",
          "package": "persistent",
          "source": "src/Database-Persist-Types-Base.html#PrimaryDef",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "PrimaryDef",
          "package": "persistent",
          "partial": "Primary Def",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#t:PrimaryDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003equery options\n\u003c/p\u003e\u003cp\u003ePersistent users use these directly\n\u003c/p\u003e",
          "module": "Database.Persist.Types",
          "name": "SelectOpt",
          "package": "persistent",
          "source": "src/Database-Persist-Class-PersistEntity.html#SelectOpt",
          "type": "data"
        },
        "index": {
          "description": "query options Persistent users use these directly",
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "SelectOpt",
          "package": "persistent",
          "partial": "Select Opt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#t:SelectOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "SomePersistField",
          "package": "persistent",
          "source": "src/Database-Persist-Class-PersistField.html#SomePersistField",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "SomePersistField",
          "package": "persistent",
          "partial": "Some Persist Field",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#t:SomePersistField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA SQL data type. Naming attempts to reflect the underlying Haskell\n datatypes, eg SqlString instead of SqlVarchar. Different SQL databases may\n have different translations for these types.\n\u003c/p\u003e",
          "module": "Database.Persist.Types",
          "name": "SqlType",
          "package": "persistent",
          "source": "src/Database-Persist-Types-Base.html#SqlType",
          "type": "data"
        },
        "index": {
          "description": "SQL data type Naming attempts to reflect the underlying Haskell datatypes eg SqlString instead of SqlVarchar Different SQL databases may have different translations for these types",
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "SqlType",
          "package": "persistent",
          "partial": "Sql Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#t:SqlType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "UniqueDef",
          "package": "persistent",
          "source": "src/Database-Persist-Types-Base.html#UniqueDef",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "UniqueDef",
          "package": "persistent",
          "partial": "Unique Def",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#t:UniqueDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eupdataing a database entity\n\u003c/p\u003e\u003cp\u003ePersistent users use combinators to create these\n\u003c/p\u003e",
          "module": "Database.Persist.Types",
          "name": "Update",
          "package": "persistent",
          "source": "src/Database-Persist-Class-PersistEntity.html#Update",
          "type": "data"
        },
        "index": {
          "description": "updataing database entity Persistent users use combinators to create these",
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "Update",
          "package": "persistent",
          "partial": "Update",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#t:Update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "UpdateGetException",
          "package": "persistent",
          "source": "src/Database-Persist-Types-Base.html#UpdateGetException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "UpdateGetException",
          "package": "persistent",
          "partial": "Update Get Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#t:UpdateGetException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe reason why a field is \u003ccode\u003enullable\u003c/code\u003e is very important.  A\n field that is nullable because of a \u003ccode\u003eMaybe\u003c/code\u003e tag will have its\n type changed from \u003ccode\u003eA\u003c/code\u003e to \u003ccode\u003eMaybe A\u003c/code\u003e.  OTOH, a field that is\n nullable because of a \u003ccode\u003enullable\u003c/code\u003e tag will remain with the same\n type.\n\u003c/p\u003e",
          "module": "Database.Persist.Types",
          "name": "WhyNullable",
          "package": "persistent",
          "source": "src/Database-Persist-Types-Base.html#WhyNullable",
          "type": "data"
        },
        "index": {
          "description": "The reason why field is nullable is very important field that is nullable because of Maybe tag will have its type changed from to Maybe OTOH field that is nullable because of nullable tag will remain with the same type",
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "WhyNullable",
          "package": "persistent",
          "partial": "Why Nullable",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#t:WhyNullable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAvoid orphan instances.\n\u003c/p\u003e",
          "module": "Database.Persist.Types",
          "name": "ZT",
          "package": "persistent",
          "source": "src/Database-Persist-Types-Base.html#ZT",
          "type": "newtype"
        },
        "index": {
          "description": "Avoid orphan instances",
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "ZT",
          "package": "persistent",
          "partial": "ZT",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#t:ZT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen used on a uniqueness constraint, there\n may be at most one \u003ccode\u003e\u003ca\u003eActive\u003c/a\u003e\u003c/code\u003e record.\n\u003c/p\u003e",
          "module": "Database.Persist.Types",
          "name": "Active",
          "package": "persistent",
          "signature": "Active",
          "source": "src/Database-Persist-Types-Base.html#Checkmark",
          "type": "function"
        },
        "index": {
          "description": "When used on uniqueness constraint there may be at most one Active record",
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "Active",
          "package": "persistent",
          "partial": "Active",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:Active"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "Add",
          "package": "persistent",
          "signature": "Add",
          "source": "src/Database-Persist-Types-Base.html#PersistUpdate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "Add",
          "package": "persistent",
          "partial": "Add",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:Add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "Asc",
          "package": "persistent",
          "signature": "forall typ . Asc (EntityField record typ)",
          "source": "src/Database-Persist-Class-PersistEntity.html#SelectOpt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "Asc",
          "package": "persistent",
          "partial": "Asc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:Asc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "Assign",
          "package": "persistent",
          "signature": "Assign",
          "source": "src/Database-Persist-Types-Base.html#PersistUpdate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "Assign",
          "package": "persistent",
          "partial": "Assign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:Assign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "BackendFilter",
          "package": "persistent",
          "signature": "BackendFilter (BackendSpecificFilter (PersistEntityBackend record) record)",
          "source": "src/Database-Persist-Class-PersistEntity.html#Filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "BackendFilter",
          "package": "persistent",
          "partial": "Backend Filter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:BackendFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "BackendSpecificFilter",
          "package": "persistent",
          "signature": "BackendSpecificFilter Text",
          "source": "src/Database-Persist-Types-Base.html#PersistFilter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "BackendSpecificFilter",
          "package": "persistent",
          "partial": "Backend Specific Filter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:BackendSpecificFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "ByMaybeAttr",
          "package": "persistent",
          "signature": "ByMaybeAttr",
          "source": "src/Database-Persist-Types-Base.html#WhyNullable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "ByMaybeAttr",
          "package": "persistent",
          "partial": "By Maybe Attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:ByMaybeAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "ByNullableAttr",
          "package": "persistent",
          "signature": "ByNullableAttr",
          "source": "src/Database-Persist-Types-Base.html#WhyNullable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "ByNullableAttr",
          "package": "persistent",
          "partial": "By Nullable Attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:ByNullableAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "DBName",
          "package": "persistent",
          "signature": "DBName",
          "source": "src/Database-Persist-Types-Base.html#DBName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "DBName",
          "package": "persistent",
          "partial": "DBName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:DBName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "Desc",
          "package": "persistent",
          "signature": "forall typ . Desc (EntityField record typ)",
          "source": "src/Database-Persist-Class-PersistEntity.html#SelectOpt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "Desc",
          "package": "persistent",
          "partial": "Desc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:Desc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "Divide",
          "package": "persistent",
          "signature": "Divide",
          "source": "src/Database-Persist-Types-Base.html#PersistUpdate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "Divide",
          "package": "persistent",
          "partial": "Divide",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:Divide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "Entity",
          "package": "persistent",
          "signature": "Entity",
          "source": "src/Database-Persist-Class-PersistEntity.html#Entity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "Entity",
          "package": "persistent",
          "partial": "Entity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:Entity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "EntityDef",
          "package": "persistent",
          "signature": "EntityDef",
          "source": "src/Database-Persist-Types-Base.html#EntityDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "EntityDef",
          "package": "persistent",
          "partial": "Entity Def",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:EntityDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "Eq",
          "package": "persistent",
          "signature": "Eq",
          "source": "src/Database-Persist-Types-Base.html#PersistFilter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "Eq",
          "package": "persistent",
          "partial": "Eq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:Eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "FTApp",
          "package": "persistent",
          "signature": "FTApp FieldType FieldType",
          "source": "src/Database-Persist-Types-Base.html#FieldType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "FTApp",
          "package": "persistent",
          "partial": "FTApp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:FTApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "FTList",
          "package": "persistent",
          "signature": "FTList FieldType",
          "source": "src/Database-Persist-Types-Base.html#FieldType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "FTList",
          "package": "persistent",
          "partial": "FTList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:FTList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional module and name.\n\u003c/p\u003e",
          "module": "Database.Persist.Types",
          "name": "FTTypeCon",
          "package": "persistent",
          "signature": "FTTypeCon (Maybe Text) Text",
          "source": "src/Database-Persist-Types-Base.html#FieldType",
          "type": "function"
        },
        "index": {
          "description": "Optional module and name",
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "FTTypeCon",
          "package": "persistent",
          "partial": "FTType Con",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:FTTypeCon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "FieldDef",
          "package": "persistent",
          "signature": "FieldDef",
          "source": "src/Database-Persist-Types-Base.html#FieldDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "FieldDef",
          "package": "persistent",
          "partial": "Field Def",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:FieldDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "Filter",
          "package": "persistent",
          "signature": "Filter",
          "source": "src/Database-Persist-Class-PersistEntity.html#Filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "Filter",
          "package": "persistent",
          "partial": "Filter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:Filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvenient for internal use, not needed for the API\n\u003c/p\u003e",
          "module": "Database.Persist.Types",
          "name": "FilterAnd",
          "package": "persistent",
          "signature": "FilterAnd [Filter record]",
          "source": "src/Database-Persist-Class-PersistEntity.html#Filter",
          "type": "function"
        },
        "index": {
          "description": "convenient for internal use not needed for the API",
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "FilterAnd",
          "normalized": "FilterAnd[Filter a]",
          "package": "persistent",
          "partial": "Filter And",
          "signature": "FilterAnd[Filter record]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:FilterAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "FilterOr",
          "package": "persistent",
          "signature": "FilterOr [Filter record]",
          "source": "src/Database-Persist-Class-PersistEntity.html#Filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "FilterOr",
          "normalized": "FilterOr[Filter a]",
          "package": "persistent",
          "partial": "Filter Or",
          "signature": "FilterOr[Filter record]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:FilterOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "ForeignDef",
          "package": "persistent",
          "signature": "ForeignDef",
          "source": "src/Database-Persist-Types-Base.html#ForeignDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "ForeignDef",
          "package": "persistent",
          "partial": "Foreign Def",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:ForeignDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "Ge",
          "package": "persistent",
          "signature": "Ge",
          "source": "src/Database-Persist-Types-Base.html#PersistFilter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "Ge",
          "package": "persistent",
          "partial": "Ge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:Ge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "Gt",
          "package": "persistent",
          "signature": "Gt",
          "source": "src/Database-Persist-Types-Base.html#PersistFilter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "Gt",
          "package": "persistent",
          "partial": "Gt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:Gt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "HaskellName",
          "package": "persistent",
          "signature": "HaskellName",
          "source": "src/Database-Persist-Types-Base.html#HaskellName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "HaskellName",
          "package": "persistent",
          "partial": "Haskell Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:HaskellName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "In",
          "package": "persistent",
          "signature": "In",
          "source": "src/Database-Persist-Types-Base.html#PersistFilter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "In",
          "package": "persistent",
          "partial": "In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:In"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen used on a uniqueness constraint, there\n may be any number of \u003ccode\u003e\u003ca\u003eInactive\u003c/a\u003e\u003c/code\u003e records.\n\u003c/p\u003e",
          "module": "Database.Persist.Types",
          "name": "Inactive",
          "package": "persistent",
          "signature": "Inactive",
          "source": "src/Database-Persist-Types-Base.html#Checkmark",
          "type": "function"
        },
        "index": {
          "description": "When used on uniqueness constraint there may be any number of Inactive records",
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "Inactive",
          "package": "persistent",
          "partial": "Inactive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:Inactive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "Key",
          "package": "persistent",
          "signature": "Key",
          "source": "src/Database-Persist-Types-Base.html#KeyBackend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "Key",
          "package": "persistent",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "KeyNotFound",
          "package": "persistent",
          "signature": "KeyNotFound String",
          "source": "src/Database-Persist-Types-Base.html#UpdateGetException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "KeyNotFound",
          "package": "persistent",
          "partial": "Key Not Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:KeyNotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "Le",
          "package": "persistent",
          "signature": "Le",
          "source": "src/Database-Persist-Types-Base.html#PersistFilter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "Le",
          "package": "persistent",
          "partial": "Le",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:Le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "LimitTo",
          "package": "persistent",
          "signature": "LimitTo Int",
          "source": "src/Database-Persist-Class-PersistEntity.html#SelectOpt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "LimitTo",
          "package": "persistent",
          "partial": "Limit To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:LimitTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "Lt",
          "package": "persistent",
          "signature": "Lt",
          "source": "src/Database-Persist-Types-Base.html#PersistFilter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "Lt",
          "package": "persistent",
          "partial": "Lt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:Lt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "Multiply",
          "package": "persistent",
          "signature": "Multiply",
          "source": "src/Database-Persist-Types-Base.html#PersistUpdate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "Multiply",
          "package": "persistent",
          "partial": "Multiply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:Multiply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "Ne",
          "package": "persistent",
          "signature": "Ne",
          "source": "src/Database-Persist-Types-Base.html#PersistFilter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "Ne",
          "package": "persistent",
          "partial": "Ne",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:Ne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "NotIn",
          "package": "persistent",
          "signature": "NotIn",
          "source": "src/Database-Persist-Types-Base.html#PersistFilter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "NotIn",
          "package": "persistent",
          "partial": "Not In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:NotIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "NotNullable",
          "package": "persistent",
          "signature": "NotNullable",
          "source": "src/Database-Persist-Types-Base.html#IsNullable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "NotNullable",
          "package": "persistent",
          "partial": "Not Nullable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:NotNullable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "Nullable",
          "package": "persistent",
          "signature": "Nullable !WhyNullable",
          "source": "src/Database-Persist-Types-Base.html#IsNullable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "Nullable",
          "package": "persistent",
          "partial": "Nullable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:Nullable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "OffsetBy",
          "package": "persistent",
          "signature": "OffsetBy Int",
          "source": "src/Database-Persist-Class-PersistEntity.html#SelectOpt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "OffsetBy",
          "package": "persistent",
          "partial": "Offset By",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:OffsetBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "PersistBool",
          "package": "persistent",
          "signature": "PersistBool Bool",
          "source": "src/Database-Persist-Types-Base.html#PersistValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "PersistBool",
          "package": "persistent",
          "partial": "Persist Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:PersistBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "PersistByteString",
          "package": "persistent",
          "signature": "PersistByteString ByteString",
          "source": "src/Database-Persist-Types-Base.html#PersistValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "PersistByteString",
          "package": "persistent",
          "partial": "Persist Byte String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:PersistByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "PersistDay",
          "package": "persistent",
          "signature": "PersistDay Day",
          "source": "src/Database-Persist-Types-Base.html#PersistValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "PersistDay",
          "package": "persistent",
          "partial": "Persist Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:PersistDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsing \u003ccode\u003e\u003ca\u003ePersistDbSpecific\u003c/a\u003e\u003c/code\u003e allows you to use types specific to a particular backend\n For example, below is a simple example of the PostGIS geography type:\n\u003c/p\u003e\u003cpre\u003e\n data Geo = Geo ByteString\n\ninstance PersistField Geo where\n   toPersistValue (Geo t) = PersistDbSpecific t\n\nfromPersistValue (PersistDbSpecific t) = Right $ Geo $ Data.ByteString.concat [\u003ca\u003e'\u003c/a\u003e, t, \u003ca\u003e'\u003c/a\u003e]\n   fromPersistValue _ = Left \u003ca\u003eGeo values must be converted from PersistDbSpecific\u003c/a\u003e\n\ninstance PersistFieldSql Geo where\n   sqlType _ = SqlOther \u003ca\u003eGEOGRAPHY(POINT,4326)\u003c/a\u003e\n\ntoPoint :: Double -\u003e Double -\u003e Geo\n toPoint lat lon = Geo $ Data.ByteString.concat [\u003ca\u003e'POINT(\u003c/a\u003e, ps $ lon, \u003ca\u003e \u003c/a\u003e, ps $ lat, \u003ca\u003e)'\u003c/a\u003e]\n   where ps = Data.Text.pack . show\n\u003c/pre\u003e\u003cp\u003eIf Foo has a geography field, we can then perform insertions like the following:\n\u003c/p\u003e\u003cpre\u003e\n insert $ Foo (toPoint 44 44)\n\u003c/pre\u003e",
          "module": "Database.Persist.Types",
          "name": "PersistDbSpecific",
          "package": "persistent",
          "signature": "PersistDbSpecific ByteString",
          "source": "src/Database-Persist-Types-Base.html#PersistValue",
          "type": "function"
        },
        "index": {
          "description": "Using PersistDbSpecific allows you to use types specific to particular backend For example below is simple example of the PostGIS geography type data Geo Geo ByteString instance PersistField Geo where toPersistValue Geo PersistDbSpecific fromPersistValue PersistDbSpecific Right Geo Data.ByteString.concat fromPersistValue Left Geo values must be converted from PersistDbSpecific instance PersistFieldSql Geo where sqlType SqlOther GEOGRAPHY POINT toPoint Double Double Geo toPoint lat lon Geo Data.ByteString.concat POINT ps lon ps lat where ps Data.Text.pack show If Foo has geography field we can then perform insertions like the following insert Foo toPoint",
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "PersistDbSpecific",
          "package": "persistent",
          "partial": "Persist Db Specific",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:PersistDbSpecific"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "PersistDouble",
          "package": "persistent",
          "signature": "PersistDouble Double",
          "source": "src/Database-Persist-Types-Base.html#PersistValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "PersistDouble",
          "package": "persistent",
          "partial": "Persist Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:PersistDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric Exception\n\u003c/p\u003e",
          "module": "Database.Persist.Types",
          "name": "PersistError",
          "package": "persistent",
          "signature": "PersistError Text",
          "source": "src/Database-Persist-Types-Base.html#PersistException",
          "type": "function"
        },
        "index": {
          "description": "Generic Exception",
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "PersistError",
          "package": "persistent",
          "partial": "Persist Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:PersistError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "PersistForeignConstraintUnmet",
          "package": "persistent",
          "signature": "PersistForeignConstraintUnmet Text",
          "source": "src/Database-Persist-Types-Base.html#PersistException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "PersistForeignConstraintUnmet",
          "package": "persistent",
          "partial": "Persist Foreign Constraint Unmet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:PersistForeignConstraintUnmet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "PersistInt64",
          "package": "persistent",
          "signature": "PersistInt64 Int64",
          "source": "src/Database-Persist-Types-Base.html#PersistValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "PersistInt64",
          "package": "persistent",
          "partial": "Persist Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:PersistInt64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "PersistInvalidField",
          "package": "persistent",
          "signature": "PersistInvalidField Text",
          "source": "src/Database-Persist-Types-Base.html#PersistException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "PersistInvalidField",
          "package": "persistent",
          "partial": "Persist Invalid Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:PersistInvalidField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "PersistList",
          "package": "persistent",
          "signature": "PersistList [PersistValue]",
          "source": "src/Database-Persist-Types-Base.html#PersistValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "PersistList",
          "normalized": "PersistList[PersistValue]",
          "package": "persistent",
          "partial": "Persist List",
          "signature": "PersistList[PersistValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:PersistList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "PersistMap",
          "package": "persistent",
          "signature": "PersistMap [(Text, PersistValue)]",
          "source": "src/Database-Persist-Types-Base.html#PersistValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "PersistMap",
          "normalized": "PersistMap[(Text,PersistValue)]",
          "package": "persistent",
          "partial": "Persist Map",
          "signature": "PersistMap[(Text,PersistValue)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:PersistMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "PersistMarshalError",
          "package": "persistent",
          "signature": "PersistMarshalError Text",
          "source": "src/Database-Persist-Types-Base.html#PersistException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "PersistMarshalError",
          "package": "persistent",
          "partial": "Persist Marshal Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:PersistMarshalError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "PersistMongoDBError",
          "package": "persistent",
          "signature": "PersistMongoDBError Text",
          "source": "src/Database-Persist-Types-Base.html#PersistException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "PersistMongoDBError",
          "package": "persistent",
          "partial": "Persist Mongo DBError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:PersistMongoDBError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "PersistMongoDBUnsupported",
          "package": "persistent",
          "signature": "PersistMongoDBUnsupported Text",
          "source": "src/Database-Persist-Types-Base.html#PersistException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "PersistMongoDBUnsupported",
          "package": "persistent",
          "partial": "Persist Mongo DBUnsupported",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:PersistMongoDBUnsupported"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "PersistNull",
          "package": "persistent",
          "signature": "PersistNull",
          "source": "src/Database-Persist-Types-Base.html#PersistValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "PersistNull",
          "package": "persistent",
          "partial": "Persist Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:PersistNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntended especially for MongoDB backend\n\u003c/p\u003e",
          "module": "Database.Persist.Types",
          "name": "PersistObjectId",
          "package": "persistent",
          "signature": "PersistObjectId ByteString",
          "source": "src/Database-Persist-Types-Base.html#PersistValue",
          "type": "function"
        },
        "index": {
          "description": "Intended especially for MongoDB backend",
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "PersistObjectId",
          "package": "persistent",
          "partial": "Persist Object Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:PersistObjectId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "PersistRational",
          "package": "persistent",
          "signature": "PersistRational Rational",
          "source": "src/Database-Persist-Types-Base.html#PersistValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "PersistRational",
          "package": "persistent",
          "partial": "Persist Rational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:PersistRational"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "PersistText",
          "package": "persistent",
          "signature": "PersistText Text",
          "source": "src/Database-Persist-Types-Base.html#PersistValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "PersistText",
          "package": "persistent",
          "partial": "Persist Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:PersistText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "PersistTimeOfDay",
          "package": "persistent",
          "signature": "PersistTimeOfDay TimeOfDay",
          "source": "src/Database-Persist-Types-Base.html#PersistValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "PersistTimeOfDay",
          "package": "persistent",
          "partial": "Persist Time Of Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:PersistTimeOfDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "PersistUTCTime",
          "package": "persistent",
          "signature": "PersistUTCTime UTCTime",
          "source": "src/Database-Persist-Types-Base.html#PersistValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "PersistUTCTime",
          "package": "persistent",
          "partial": "Persist UTCTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:PersistUTCTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "PersistZonedTime",
          "package": "persistent",
          "signature": "PersistZonedTime ZT",
          "source": "src/Database-Persist-Types-Base.html#PersistValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "PersistZonedTime",
          "package": "persistent",
          "partial": "Persist Zoned Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:PersistZonedTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "PrimaryDef",
          "package": "persistent",
          "signature": "PrimaryDef",
          "source": "src/Database-Persist-Types-Base.html#PrimaryDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "PrimaryDef",
          "package": "persistent",
          "partial": "Primary Def",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:PrimaryDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "SomePersistField",
          "package": "persistent",
          "signature": "SomePersistField a",
          "source": "src/Database-Persist-Class-PersistField.html#SomePersistField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "SomePersistField",
          "package": "persistent",
          "partial": "Some Persist Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:SomePersistField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "SqlBlob",
          "package": "persistent",
          "signature": "SqlBlob",
          "source": "src/Database-Persist-Types-Base.html#SqlType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "SqlBlob",
          "package": "persistent",
          "partial": "Sql Blob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:SqlBlob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "SqlBool",
          "package": "persistent",
          "signature": "SqlBool",
          "source": "src/Database-Persist-Types-Base.html#SqlType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "SqlBool",
          "package": "persistent",
          "partial": "Sql Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:SqlBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "SqlDay",
          "package": "persistent",
          "signature": "SqlDay",
          "source": "src/Database-Persist-Types-Base.html#SqlType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "SqlDay",
          "package": "persistent",
          "partial": "Sql Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:SqlDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "SqlDayTime",
          "package": "persistent",
          "signature": "SqlDayTime",
          "source": "src/Database-Persist-Types-Base.html#SqlType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "SqlDayTime",
          "package": "persistent",
          "partial": "Sql Day Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:SqlDayTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "SqlDayTimeZoned",
          "package": "persistent",
          "signature": "SqlDayTimeZoned",
          "source": "src/Database-Persist-Types-Base.html#SqlType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "SqlDayTimeZoned",
          "package": "persistent",
          "partial": "Sql Day Time Zoned",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:SqlDayTimeZoned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "SqlInt32",
          "package": "persistent",
          "signature": "SqlInt32",
          "source": "src/Database-Persist-Types-Base.html#SqlType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "SqlInt32",
          "package": "persistent",
          "partial": "Sql Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:SqlInt32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "SqlInt64",
          "package": "persistent",
          "signature": "SqlInt64",
          "source": "src/Database-Persist-Types-Base.html#SqlType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "SqlInt64",
          "package": "persistent",
          "partial": "Sql Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:SqlInt64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "SqlNumeric",
          "package": "persistent",
          "signature": "SqlNumeric Word32 Word32",
          "source": "src/Database-Persist-Types-Base.html#SqlType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "SqlNumeric",
          "package": "persistent",
          "partial": "Sql Numeric",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:SqlNumeric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea backend-specific name\n\u003c/p\u003e",
          "module": "Database.Persist.Types",
          "name": "SqlOther",
          "package": "persistent",
          "signature": "SqlOther Text",
          "source": "src/Database-Persist-Types-Base.html#SqlType",
          "type": "function"
        },
        "index": {
          "description": "backend-specific name",
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "SqlOther",
          "package": "persistent",
          "partial": "Sql Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:SqlOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "SqlReal",
          "package": "persistent",
          "signature": "SqlReal",
          "source": "src/Database-Persist-Types-Base.html#SqlType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "SqlReal",
          "package": "persistent",
          "partial": "Sql Real",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:SqlReal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "SqlString",
          "package": "persistent",
          "signature": "SqlString",
          "source": "src/Database-Persist-Types-Base.html#SqlType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "SqlString",
          "package": "persistent",
          "partial": "Sql String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:SqlString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "SqlTime",
          "package": "persistent",
          "signature": "SqlTime",
          "source": "src/Database-Persist-Types-Base.html#SqlType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "SqlTime",
          "package": "persistent",
          "partial": "Sql Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:SqlTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "Subtract",
          "package": "persistent",
          "signature": "Subtract",
          "source": "src/Database-Persist-Types-Base.html#PersistUpdate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "Subtract",
          "package": "persistent",
          "partial": "Subtract",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:Subtract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "UniqueDef",
          "package": "persistent",
          "signature": "UniqueDef",
          "source": "src/Database-Persist-Types-Base.html#UniqueDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "UniqueDef",
          "package": "persistent",
          "partial": "Unique Def",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:UniqueDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "Update",
          "package": "persistent",
          "signature": "Update",
          "source": "src/Database-Persist-Class-PersistEntity.html#Update",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "Update",
          "package": "persistent",
          "partial": "Update",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:Update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "ZT",
          "package": "persistent",
          "signature": "ZT ZonedTime",
          "source": "src/Database-Persist-Types-Base.html#ZT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "ZT",
          "package": "persistent",
          "partial": "ZT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:ZT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "entityAttrs",
          "package": "persistent",
          "signature": "[Attr]",
          "source": "src/Database-Persist-Types-Base.html#EntityDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "entityAttrs",
          "normalized": "[Attr]",
          "package": "persistent",
          "partial": "Attrs",
          "signature": "[Attr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:entityAttrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "entityDB",
          "package": "persistent",
          "signature": "DBName",
          "source": "src/Database-Persist-Types-Base.html#EntityDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "entityDB",
          "package": "persistent",
          "partial": "DB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:entityDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "entityDerives",
          "package": "persistent",
          "signature": "[Text]",
          "source": "src/Database-Persist-Types-Base.html#EntityDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "entityDerives",
          "normalized": "[Text]",
          "package": "persistent",
          "partial": "Derives",
          "signature": "[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:entityDerives"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "entityExtra",
          "package": "persistent",
          "signature": "(Map Text [ExtraLine])",
          "source": "src/Database-Persist-Types-Base.html#EntityDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "entityExtra",
          "normalized": "(Map Text[ExtraLine])",
          "package": "persistent",
          "partial": "Extra",
          "signature": "(Map Text[ExtraLine])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:entityExtra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "entityFields",
          "package": "persistent",
          "signature": "[FieldDef sqlType]",
          "source": "src/Database-Persist-Types-Base.html#EntityDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "entityFields",
          "normalized": "[FieldDef a]",
          "package": "persistent",
          "partial": "Fields",
          "signature": "[FieldDef sqlType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:entityFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "entityForeigns",
          "package": "persistent",
          "signature": "[ForeignDef]",
          "source": "src/Database-Persist-Types-Base.html#EntityDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "entityForeigns",
          "normalized": "[ForeignDef]",
          "package": "persistent",
          "partial": "Foreigns",
          "signature": "[ForeignDef]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:entityForeigns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "entityHaskell",
          "package": "persistent",
          "signature": "HaskellName",
          "source": "src/Database-Persist-Types-Base.html#EntityDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "entityHaskell",
          "package": "persistent",
          "partial": "Haskell",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:entityHaskell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "entityID",
          "package": "persistent",
          "signature": "DBName",
          "source": "src/Database-Persist-Types-Base.html#EntityDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "entityID",
          "package": "persistent",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:entityID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "entityKey",
          "package": "persistent",
          "signature": "Key entity",
          "source": "src/Database-Persist-Class-PersistEntity.html#Entity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "entityKey",
          "package": "persistent",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:entityKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "entityPrimary",
          "package": "persistent",
          "signature": "Maybe PrimaryDef",
          "source": "src/Database-Persist-Types-Base.html#EntityDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "entityPrimary",
          "package": "persistent",
          "partial": "Primary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:entityPrimary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "entitySum",
          "package": "persistent",
          "signature": "Bool",
          "source": "src/Database-Persist-Types-Base.html#EntityDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "entitySum",
          "package": "persistent",
          "partial": "Sum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:entitySum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "entityUniques",
          "package": "persistent",
          "signature": "[UniqueDef]",
          "source": "src/Database-Persist-Types-Base.html#EntityDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "entityUniques",
          "normalized": "[UniqueDef]",
          "package": "persistent",
          "partial": "Uniques",
          "signature": "[UniqueDef]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:entityUniques"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "entityVal",
          "package": "persistent",
          "signature": "entity",
          "source": "src/Database-Persist-Class-PersistEntity.html#Entity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "entityVal",
          "package": "persistent",
          "partial": "Val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:entityVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003euser annotations for a field\n\u003c/p\u003e",
          "module": "Database.Persist.Types",
          "name": "fieldAttrs",
          "package": "persistent",
          "signature": "[Attr]",
          "source": "src/Database-Persist-Types-Base.html#FieldDef",
          "type": "function"
        },
        "index": {
          "description": "user annotations for field",
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "fieldAttrs",
          "normalized": "[Attr]",
          "package": "persistent",
          "partial": "Attrs",
          "signature": "[Attr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:fieldAttrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "fieldDB",
          "package": "persistent",
          "signature": "DBName",
          "source": "src/Database-Persist-Types-Base.html#FieldDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "fieldDB",
          "package": "persistent",
          "partial": "DB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:fieldDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eindicates that the field uses an embedded entity\n\u003c/p\u003e",
          "module": "Database.Persist.Types",
          "name": "fieldEmbedded",
          "package": "persistent",
          "signature": "Maybe (EntityDef ())",
          "source": "src/Database-Persist-Types-Base.html#FieldDef",
          "type": "function"
        },
        "index": {
          "description": "indicates that the field uses an embedded entity",
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "fieldEmbedded",
          "normalized": "Maybe(EntityDef())",
          "package": "persistent",
          "partial": "Embedded",
          "signature": "Maybe(EntityDef())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:fieldEmbedded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ename of the field\n\u003c/p\u003e",
          "module": "Database.Persist.Types",
          "name": "fieldHaskell",
          "package": "persistent",
          "signature": "HaskellName",
          "source": "src/Database-Persist-Types-Base.html#FieldDef",
          "type": "function"
        },
        "index": {
          "description": "name of the field",
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "fieldHaskell",
          "package": "persistent",
          "partial": "Haskell",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:fieldHaskell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "fieldSqlType",
          "package": "persistent",
          "signature": "sqlType",
          "source": "src/Database-Persist-Types-Base.html#FieldDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "fieldSqlType",
          "package": "persistent",
          "partial": "Sql Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:fieldSqlType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea strict field in the data type. Default: true\n\u003c/p\u003e",
          "module": "Database.Persist.Types",
          "name": "fieldStrict",
          "package": "persistent",
          "signature": "Bool",
          "source": "src/Database-Persist-Types-Base.html#FieldDef",
          "type": "function"
        },
        "index": {
          "description": "strict field in the data type Default true",
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "fieldStrict",
          "package": "persistent",
          "partial": "Strict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:fieldStrict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "fieldType",
          "package": "persistent",
          "signature": "FieldType",
          "source": "src/Database-Persist-Types-Base.html#FieldDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "fieldType",
          "package": "persistent",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:fieldType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "filterField",
          "package": "persistent",
          "signature": "EntityField record typ",
          "source": "src/Database-Persist-Class-PersistEntity.html#Filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "filterField",
          "package": "persistent",
          "partial": "Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:filterField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "filterFilter",
          "package": "persistent",
          "signature": "PersistFilter",
          "source": "src/Database-Persist-Class-PersistEntity.html#Filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "filterFilter",
          "package": "persistent",
          "partial": "Filter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:filterFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "filterValue",
          "package": "persistent",
          "signature": "Either typ [typ]",
          "source": "src/Database-Persist-Class-PersistEntity.html#Filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "filterValue",
          "normalized": "Either a[a]",
          "package": "persistent",
          "partial": "Value",
          "signature": "Either typ[typ]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:filterValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "foreignAttrs",
          "package": "persistent",
          "signature": "[Attr]",
          "source": "src/Database-Persist-Types-Base.html#ForeignDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "foreignAttrs",
          "normalized": "[Attr]",
          "package": "persistent",
          "partial": "Attrs",
          "signature": "[Attr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:foreignAttrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "foreignConstraintNameDBName",
          "package": "persistent",
          "signature": "DBName",
          "source": "src/Database-Persist-Types-Base.html#ForeignDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "foreignConstraintNameDBName",
          "package": "persistent",
          "partial": "Constraint Name DBName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:foreignConstraintNameDBName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "foreignConstraintNameHaskell",
          "package": "persistent",
          "signature": "HaskellName",
          "source": "src/Database-Persist-Types-Base.html#ForeignDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "foreignConstraintNameHaskell",
          "package": "persistent",
          "partial": "Constraint Name Haskell",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:foreignConstraintNameHaskell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "foreignFields",
          "package": "persistent",
          "signature": "[(HaskellName, DBName, HaskellName, DBName)]",
          "source": "src/Database-Persist-Types-Base.html#ForeignDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "foreignFields",
          "normalized": "[(HaskellName,DBName,HaskellName,DBName)]",
          "package": "persistent",
          "partial": "Fields",
          "signature": "[(HaskellName,DBName,HaskellName,DBName)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:foreignFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "foreignRefTableDBName",
          "package": "persistent",
          "signature": "DBName",
          "source": "src/Database-Persist-Types-Base.html#ForeignDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "foreignRefTableDBName",
          "package": "persistent",
          "partial": "Ref Table DBName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:foreignRefTableDBName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "foreignRefTableHaskell",
          "package": "persistent",
          "signature": "HaskellName",
          "source": "src/Database-Persist-Types-Base.html#ForeignDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "foreignRefTableHaskell",
          "package": "persistent",
          "partial": "Ref Table Haskell",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:foreignRefTableHaskell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "fromPersistValueText",
          "package": "persistent",
          "signature": "PersistValue -\u003e Either String Text",
          "source": "src/Database-Persist-Types-Base.html#fromPersistValueText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "fromPersistValueText",
          "normalized": "PersistValue-\u003eEither String Text",
          "package": "persistent",
          "partial": "Persist Value Text",
          "signature": "PersistValue-\u003eEither String Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:fromPersistValueText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "primaryAttrs",
          "package": "persistent",
          "signature": "[Attr]",
          "source": "src/Database-Persist-Types-Base.html#PrimaryDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "primaryAttrs",
          "normalized": "[Attr]",
          "package": "persistent",
          "partial": "Attrs",
          "signature": "[Attr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:primaryAttrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "primaryFields",
          "package": "persistent",
          "signature": "[(HaskellName, DBName)]",
          "source": "src/Database-Persist-Types-Base.html#PrimaryDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "primaryFields",
          "normalized": "[(HaskellName,DBName)]",
          "package": "persistent",
          "partial": "Fields",
          "signature": "[(HaskellName,DBName)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:primaryFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "unDBName",
          "package": "persistent",
          "signature": "Text",
          "source": "src/Database-Persist-Types-Base.html#DBName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "unDBName",
          "package": "persistent",
          "partial": "DBName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:unDBName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "unHaskellName",
          "package": "persistent",
          "signature": "Text",
          "source": "src/Database-Persist-Types-Base.html#HaskellName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "unHaskellName",
          "package": "persistent",
          "partial": "Haskell Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:unHaskellName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "unKey",
          "package": "persistent",
          "signature": "PersistValue",
          "source": "src/Database-Persist-Types-Base.html#KeyBackend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "unKey",
          "package": "persistent",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:unKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "uniqueAttrs",
          "package": "persistent",
          "signature": "[Attr]",
          "source": "src/Database-Persist-Types-Base.html#UniqueDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "uniqueAttrs",
          "normalized": "[Attr]",
          "package": "persistent",
          "partial": "Attrs",
          "signature": "[Attr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:uniqueAttrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "uniqueDBName",
          "package": "persistent",
          "signature": "DBName",
          "source": "src/Database-Persist-Types-Base.html#UniqueDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "uniqueDBName",
          "package": "persistent",
          "partial": "DBName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:uniqueDBName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "uniqueFields",
          "package": "persistent",
          "signature": "[(HaskellName, DBName)]",
          "source": "src/Database-Persist-Types-Base.html#UniqueDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "uniqueFields",
          "normalized": "[(HaskellName,DBName)]",
          "package": "persistent",
          "partial": "Fields",
          "signature": "[(HaskellName,DBName)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:uniqueFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "uniqueHaskell",
          "package": "persistent",
          "signature": "HaskellName",
          "source": "src/Database-Persist-Types-Base.html#UniqueDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "uniqueHaskell",
          "package": "persistent",
          "partial": "Haskell",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:uniqueHaskell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "updateField",
          "package": "persistent",
          "signature": "EntityField record typ",
          "source": "src/Database-Persist-Class-PersistEntity.html#Update",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "updateField",
          "package": "persistent",
          "partial": "Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:updateField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "updateUpdate",
          "package": "persistent",
          "signature": "PersistUpdate",
          "source": "src/Database-Persist-Class-PersistEntity.html#Update",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "updateUpdate",
          "package": "persistent",
          "partial": "Update",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:updateUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Types",
          "name": "updateValue",
          "package": "persistent",
          "signature": "typ",
          "source": "src/Database-Persist-Class-PersistEntity.html#Update",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Types",
          "module": "Database.Persist.Types",
          "name": "updateValue",
          "package": "persistent",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist-Types.html#v:updateValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist",
          "name": "Persist",
          "package": "persistent",
          "source": "src/Database-Persist.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database Persist",
          "module": "Database.Persist",
          "name": "Persist",
          "package": "persistent",
          "partial": "Persist",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe OR of two lists of filters\n\u003c/p\u003e",
          "module": "Database.Persist",
          "name": "(||.)",
          "package": "persistent",
          "signature": "forall v.  [Filter v] -\u003e [Filter v] -\u003e [Filter v]",
          "source": "src/Database-Persist.html#%7C%7C.",
          "type": "function"
        },
        "index": {
          "description": "the OR of two lists of filters",
          "hierarchy": "Database Persist",
          "module": "Database.Persist",
          "name": "(||.) ||.",
          "normalized": "a b[Filter c]-\u003e[Filter c]-\u003e[Filter c]",
          "package": "persistent",
          "signature": "forall v.[Filter v]-\u003e[Filter v]-\u003e[Filter v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist.html#v:-124--124-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist",
          "name": "(!=.)",
          "package": "persistent",
          "signature": "EntityField v typ -\u003e typ -\u003e Filter v",
          "source": "src/Database-Persist.html#%21%3D.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist",
          "module": "Database.Persist",
          "name": "(!=.) !=.",
          "normalized": "EntityField a b-\u003eb-\u003eFilter a",
          "package": "persistent",
          "signature": "EntityField v typ-\u003etyp-\u003eFilter v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist.html#v:-33--61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eassign a field by multiplication (*=)\n\u003c/p\u003e",
          "module": "Database.Persist",
          "name": "(*=.)",
          "package": "persistent",
          "signature": "EntityField v typ -\u003e typ -\u003e Update v",
          "source": "src/Database-Persist.html#%2A%3D.",
          "type": "function"
        },
        "index": {
          "description": "assign field by multiplication",
          "hierarchy": "Database Persist",
          "module": "Database.Persist",
          "name": "(*=.) *=.",
          "normalized": "EntityField a b-\u003eb-\u003eUpdate a",
          "package": "persistent",
          "signature": "EntityField v typ-\u003etyp-\u003eUpdate v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist.html#v:-42--61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eassign a field by addition (+=)\n\u003c/p\u003e",
          "module": "Database.Persist",
          "name": "(+=.)",
          "package": "persistent",
          "signature": "EntityField v typ -\u003e typ -\u003e Update v",
          "source": "src/Database-Persist.html#%2B%3D.",
          "type": "function"
        },
        "index": {
          "description": "assign field by addition",
          "hierarchy": "Database Persist",
          "module": "Database.Persist",
          "name": "(+=.) +=.",
          "normalized": "EntityField a b-\u003eb-\u003eUpdate a",
          "package": "persistent",
          "signature": "EntityField v typ-\u003etyp-\u003eUpdate v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist.html#v:-43--61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eassign a field by subtraction (-=)\n\u003c/p\u003e",
          "module": "Database.Persist",
          "name": "(-=.)",
          "package": "persistent",
          "signature": "EntityField v typ -\u003e typ -\u003e Update v",
          "source": "src/Database-Persist.html#-%3D.",
          "type": "function"
        },
        "index": {
          "description": "assign field by subtraction",
          "hierarchy": "Database Persist",
          "module": "Database.Persist",
          "name": "(-=.) -=.",
          "normalized": "EntityField a b-\u003eb-\u003eUpdate a",
          "package": "persistent",
          "signature": "EntityField v typ-\u003etyp-\u003eUpdate v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist.html#v:-45--61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNotIn\n\u003c/p\u003e",
          "module": "Database.Persist",
          "name": "(/\u003c-.)",
          "package": "persistent",
          "signature": "EntityField v typ -\u003e [typ] -\u003e Filter v",
          "source": "src/Database-Persist.html#%2F%3C-.",
          "type": "function"
        },
        "index": {
          "description": "NotIn",
          "hierarchy": "Database Persist",
          "module": "Database.Persist",
          "name": "(/\u003c-.) /\u003c-.",
          "normalized": "EntityField a b-\u003e[b]-\u003eFilter a",
          "package": "persistent",
          "signature": "EntityField v typ-\u003e[typ]-\u003eFilter v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist.html#v:-47--60--45-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eassign a field by division (/=)\n\u003c/p\u003e",
          "module": "Database.Persist",
          "name": "(/=.)",
          "package": "persistent",
          "signature": "EntityField v typ -\u003e typ -\u003e Update v",
          "source": "src/Database-Persist.html#%2F%3D.",
          "type": "function"
        },
        "index": {
          "description": "assign field by division",
          "hierarchy": "Database Persist",
          "module": "Database.Persist",
          "name": "(/=.) /=.",
          "normalized": "EntityField a b-\u003eb-\u003eUpdate a",
          "package": "persistent",
          "signature": "EntityField v typ-\u003etyp-\u003eUpdate v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist.html#v:-47--61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn\n\u003c/p\u003e",
          "module": "Database.Persist",
          "name": "(\u003c-.)",
          "package": "persistent",
          "signature": "EntityField v typ -\u003e [typ] -\u003e Filter v",
          "source": "src/Database-Persist.html#%3C-.",
          "type": "function"
        },
        "index": {
          "description": "In",
          "hierarchy": "Database Persist",
          "module": "Database.Persist",
          "name": "(\u003c-.) \u003c-.",
          "normalized": "EntityField a b-\u003e[b]-\u003eFilter a",
          "package": "persistent",
          "signature": "EntityField v typ-\u003e[typ]-\u003eFilter v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist.html#v:-60--45-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist",
          "name": "(\u003c=.)",
          "package": "persistent",
          "signature": "EntityField v typ -\u003e typ -\u003e Filter v",
          "source": "src/Database-Persist.html#%3C%3D.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist",
          "module": "Database.Persist",
          "name": "(\u003c=.) \u003c=.",
          "normalized": "EntityField a b-\u003eb-\u003eFilter a",
          "package": "persistent",
          "signature": "EntityField v typ-\u003etyp-\u003eFilter v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist.html#v:-60--61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist",
          "name": "(\u003c.)",
          "package": "persistent",
          "signature": "EntityField v typ -\u003e typ -\u003e Filter v",
          "source": "src/Database-Persist.html#%3C.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist",
          "module": "Database.Persist",
          "name": "(\u003c.) \u003c.",
          "normalized": "EntityField a b-\u003eb-\u003eFilter a",
          "package": "persistent",
          "signature": "EntityField v typ-\u003etyp-\u003eFilter v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist.html#v:-60-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist",
          "name": "(==.)",
          "package": "persistent",
          "signature": "EntityField v typ -\u003e typ -\u003e Filter v",
          "source": "src/Database-Persist.html#%3D%3D.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist",
          "module": "Database.Persist",
          "name": "(==.) ==.",
          "normalized": "EntityField a b-\u003eb-\u003eFilter a",
          "package": "persistent",
          "signature": "EntityField v typ-\u003etyp-\u003eFilter v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist.html#v:-61--61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eassign a field a value\n\u003c/p\u003e",
          "module": "Database.Persist",
          "name": "(=.)",
          "package": "persistent",
          "signature": "EntityField v typ -\u003e typ -\u003e Update v",
          "source": "src/Database-Persist.html#%3D.",
          "type": "function"
        },
        "index": {
          "description": "assign field value",
          "hierarchy": "Database Persist",
          "module": "Database.Persist",
          "name": "(=.) =.",
          "normalized": "EntityField a b-\u003eb-\u003eUpdate a",
          "package": "persistent",
          "signature": "EntityField v typ-\u003etyp-\u003eUpdate v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist.html#v:-61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist",
          "name": "(\u003e=.)",
          "package": "persistent",
          "signature": "EntityField v typ -\u003e typ -\u003e Filter v",
          "source": "src/Database-Persist.html#%3E%3D.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist",
          "module": "Database.Persist",
          "name": "(\u003e=.) \u003e=.",
          "normalized": "EntityField a b-\u003eb-\u003eFilter a",
          "package": "persistent",
          "signature": "EntityField v typ-\u003etyp-\u003eFilter v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist.html#v:-62--61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist",
          "name": "(\u003e.)",
          "package": "persistent",
          "signature": "EntityField v typ -\u003e typ -\u003e Filter v",
          "source": "src/Database-Persist.html#%3E.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist",
          "module": "Database.Persist",
          "name": "(\u003e.) \u003e.",
          "normalized": "EntityField a b-\u003eb-\u003eFilter a",
          "package": "persistent",
          "signature": "EntityField v typ-\u003etyp-\u003eFilter v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist.html#v:-62-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist",
          "name": "getPersistMap",
          "package": "persistent",
          "signature": "PersistValue -\u003e Either Text [(Text, PersistValue)]",
          "source": "src/Database-Persist-Class-PersistField.html#getPersistMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist",
          "module": "Database.Persist",
          "name": "getPersistMap",
          "normalized": "PersistValue-\u003eEither Text[(Text,PersistValue)]",
          "package": "persistent",
          "partial": "Persist Map",
          "signature": "PersistValue-\u003eEither Text[(Text,PersistValue)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist.html#v:getPersistMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist",
          "name": "limitOffsetOrder",
          "package": "persistent",
          "signature": "[SelectOpt val] -\u003e (Int, Int, [SelectOpt val])",
          "source": "src/Database-Persist.html#limitOffsetOrder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist",
          "module": "Database.Persist",
          "name": "limitOffsetOrder",
          "normalized": "[SelectOpt a]-\u003e(Int,Int,[SelectOpt a])",
          "package": "persistent",
          "partial": "Offset Order",
          "signature": "[SelectOpt val]-\u003e(Int,Int,[SelectOpt val])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist.html#v:limitOffsetOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist",
          "name": "listToJSON",
          "package": "persistent",
          "signature": "[PersistValue] -\u003e Text",
          "source": "src/Database-Persist.html#listToJSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist",
          "module": "Database.Persist",
          "name": "listToJSON",
          "normalized": "[PersistValue]-\u003eText",
          "package": "persistent",
          "partial": "To JSON",
          "signature": "[PersistValue]-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist.html#v:listToJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist",
          "name": "mapToJSON",
          "package": "persistent",
          "signature": "[(Text, PersistValue)] -\u003e Text",
          "source": "src/Database-Persist.html#mapToJSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist",
          "module": "Database.Persist",
          "name": "mapToJSON",
          "normalized": "[(Text,PersistValue)]-\u003eText",
          "package": "persistent",
          "partial": "To JSON",
          "signature": "[(Text,PersistValue)]-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent/docs/Database-Persist.html#v:mapToJSON"
      }
    }
  ]
]