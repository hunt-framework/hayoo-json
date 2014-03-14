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
        "word": "persistent-template"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides utilities for creating backends. Regular users do not\n need to use this module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.Persist.TH",
          "name": "TH",
          "package": "persistent-template",
          "source": "src/Database-Persist-TH.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides utilities for creating backends Regular users do not need to use this module",
          "hierarchy": "Database Persist TH",
          "module": "Database.Persist.TH",
          "name": "TH",
          "package": "persistent-template",
          "partial": "TH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/persistent-template/docs/Database-Persist-TH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.TH",
          "name": "EntityJSON",
          "package": "persistent-template",
          "source": "src/Database-Persist-TH.html#EntityJSON",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Persist TH",
          "module": "Database.Persist.TH",
          "name": "EntityJSON",
          "package": "persistent-template",
          "partial": "Entity JSON",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent-template/docs/Database-Persist-TH.html#t:EntityJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSettings to be passed to the \u003ccode\u003e\u003ca\u003emkPersist\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Database.Persist.TH",
          "name": "MkPersistSettings",
          "package": "persistent-template",
          "source": "src/Database-Persist-TH.html#MkPersistSettings",
          "type": "data"
        },
        "index": {
          "description": "Settings to be passed to the mkPersist function",
          "hierarchy": "Database Persist TH",
          "module": "Database.Persist.TH",
          "name": "MkPersistSettings",
          "package": "persistent-template",
          "partial": "Mk Persist Settings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent-template/docs/Database-Persist-TH.html#t:MkPersistSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAutomatically creates a valid \u003ccode\u003e\u003ca\u003ePersistField\u003c/a\u003e\u003c/code\u003e instance for any datatype\n that has valid \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e instances. Can be very convenient for\n \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e types.\n\u003c/p\u003e",
          "module": "Database.Persist.TH",
          "name": "derivePersistField",
          "package": "persistent-template",
          "signature": "String -\u003e Q [Dec]",
          "source": "src/Database-Persist-TH.html#derivePersistField",
          "type": "function"
        },
        "index": {
          "description": "Automatically creates valid PersistField instance for any datatype that has valid Show and Read instances Can be very convenient for Enum types",
          "hierarchy": "Database Persist TH",
          "module": "Database.Persist.TH",
          "name": "derivePersistField",
          "normalized": "String-\u003eQ[Dec]",
          "package": "persistent-template",
          "partial": "Persist Field",
          "signature": "String-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-template/docs/Database-Persist-TH.html#v:derivePersistField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of the \u003ccode\u003efromJSON\u003c/code\u003e implementation for \u003ccode\u003eEntity a\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.Persist.TH",
          "name": "entityFromJSON",
          "package": "persistent-template",
          "signature": "EntityJSON -\u003e Name",
          "source": "src/Database-Persist-TH.html#entityFromJSON",
          "type": "function"
        },
        "index": {
          "description": "Name of the fromJSON implementation for Entity",
          "hierarchy": "Database Persist TH",
          "module": "Database.Persist.TH",
          "name": "entityFromJSON",
          "normalized": "EntityJSON-\u003eName",
          "package": "persistent-template",
          "partial": "From JSON",
          "signature": "EntityJSON-\u003eName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-template/docs/Database-Persist-TH.html#v:entityFromJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of the \u003ccode\u003etoJSON\u003c/code\u003e implementation for \u003ccode\u003eEntity a\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.Persist.TH",
          "name": "entityToJSON",
          "package": "persistent-template",
          "signature": "EntityJSON -\u003e Name",
          "source": "src/Database-Persist-TH.html#entityToJSON",
          "type": "function"
        },
        "index": {
          "description": "Name of the toJSON implementation for Entity",
          "hierarchy": "Database Persist TH",
          "module": "Database.Persist.TH",
          "name": "entityToJSON",
          "normalized": "EntityJSON-\u003eName",
          "package": "persistent-template",
          "partial": "To JSON",
          "signature": "EntityJSON-\u003eName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-template/docs/Database-Persist-TH.html#v:entityToJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.TH",
          "name": "lensPTH",
          "package": "persistent-template",
          "signature": "(s -\u003e a) -\u003e (s -\u003e b -\u003e t) -\u003e Lens s t a b",
          "source": "src/Database-Persist-TH.html#lensPTH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist TH",
          "module": "Database.Persist.TH",
          "name": "lensPTH",
          "normalized": "(a-\u003eb)-\u003e(a-\u003ec-\u003ed)-\u003eLens a d b c",
          "package": "persistent-template",
          "partial": "PTH",
          "signature": "(s-\u003ea)-\u003e(s-\u003eb-\u003et)-\u003eLens s t a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-template/docs/Database-Persist-TH.html#v:lensPTH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a \u003ccode\u003e\u003ca\u003eDeleteCascade\u003c/a\u003e\u003c/code\u003e instance for the given \u003ccode\u003eEntityDef\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Database.Persist.TH",
          "name": "mkDeleteCascade",
          "package": "persistent-template",
          "signature": "MkPersistSettings -\u003e [EntityDef a] -\u003e Q [Dec]",
          "source": "src/Database-Persist-TH.html#mkDeleteCascade",
          "type": "function"
        },
        "index": {
          "description": "Generate DeleteCascade instance for the given EntityDef",
          "hierarchy": "Database Persist TH",
          "module": "Database.Persist.TH",
          "name": "mkDeleteCascade",
          "normalized": "MkPersistSettings-\u003e[EntityDef a]-\u003eQ[Dec]",
          "package": "persistent-template",
          "partial": "Delete Cascade",
          "signature": "MkPersistSettings-\u003e[EntityDef a]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-template/docs/Database-Persist-TH.html#v:mkDeleteCascade"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a single function to perform all migrations for the entities\n defined here. One thing to be aware of is dependencies: if you have entities\n with foreign references, make sure to place those definitions after the\n entities they reference.\n\u003c/p\u003e",
          "module": "Database.Persist.TH",
          "name": "mkMigrate",
          "package": "persistent-template",
          "signature": "String -\u003e [EntityDef a] -\u003e Q [Dec]",
          "source": "src/Database-Persist-TH.html#mkMigrate",
          "type": "function"
        },
        "index": {
          "description": "Creates single function to perform all migrations for the entities defined here One thing to be aware of is dependencies if you have entities with foreign references make sure to place those definitions after the entities they reference",
          "hierarchy": "Database Persist TH",
          "module": "Database.Persist.TH",
          "name": "mkMigrate",
          "normalized": "String-\u003e[EntityDef a]-\u003eQ[Dec]",
          "package": "persistent-template",
          "partial": "Migrate",
          "signature": "String-\u003e[EntityDef a]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-template/docs/Database-Persist-TH.html#v:mkMigrate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate data types and appropriate \u003ccode\u003e\u003ca\u003ePersistEntity\u003c/a\u003e\u003c/code\u003e instances for the given\n \u003ccode\u003e\u003ca\u003eEntityDef\u003c/a\u003e\u003c/code\u003es. Works well with the persist quasi-quoter.\n\u003c/p\u003e",
          "module": "Database.Persist.TH",
          "name": "mkPersist",
          "package": "persistent-template",
          "signature": "MkPersistSettings -\u003e [EntityDef SqlType] -\u003e Q [Dec]",
          "source": "src/Database-Persist-TH.html#mkPersist",
          "type": "function"
        },
        "index": {
          "description": "Create data types and appropriate PersistEntity instances for the given EntityDef Works well with the persist quasi-quoter",
          "hierarchy": "Database Persist TH",
          "module": "Database.Persist.TH",
          "name": "mkPersist",
          "normalized": "MkPersistSettings-\u003e[EntityDef SqlType]-\u003eQ[Dec]",
          "package": "persistent-template",
          "partial": "Persist",
          "signature": "MkPersistSettings-\u003e[EntityDef SqlType]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-template/docs/Database-Persist-TH.html#v:mkPersist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an \u003ccode\u003eMkPersistSettings\u003c/code\u003e with default values.\n\u003c/p\u003e",
          "module": "Database.Persist.TH",
          "name": "mkPersistSettings",
          "package": "persistent-template",
          "signature": "Type-\u003e MkPersistSettings",
          "type": "function"
        },
        "index": {
          "description": "Create an MkPersistSettings with default values",
          "hierarchy": "Database Persist TH",
          "module": "Database.Persist.TH",
          "name": "mkPersistSettings",
          "normalized": "Type-\u003eMkPersistSettings",
          "package": "persistent-template",
          "partial": "Persist Settings",
          "signature": "Type-\u003eMkPersistSettings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-template/docs/Database-Persist-TH.html#v:mkPersistSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSave the \u003ccode\u003eEntityDef\u003c/code\u003es passed in under the given name.\n\u003c/p\u003e",
          "module": "Database.Persist.TH",
          "name": "mkSave",
          "package": "persistent-template",
          "signature": "String -\u003e [EntityDef SqlType] -\u003e Q [Dec]",
          "source": "src/Database-Persist-TH.html#mkSave",
          "type": "function"
        },
        "index": {
          "description": "Save the EntityDef passed in under the given name",
          "hierarchy": "Database Persist TH",
          "module": "Database.Persist.TH",
          "name": "mkSave",
          "normalized": "String-\u003e[EntityDef SqlType]-\u003eQ[Dec]",
          "package": "persistent-template",
          "partial": "Save",
          "signature": "String-\u003e[EntityDef SqlType]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-template/docs/Database-Persist-TH.html#v:mkSave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhich database backend we're using.\n\u003c/p\u003e\u003cp\u003eWhen generating data types, each type is given a generic version- which\n works with any backend- and a type synonym for the commonly used\n backend. This is where you specify that commonly used backend.\n\u003c/p\u003e",
          "module": "Database.Persist.TH",
          "name": "mpsBackend",
          "package": "persistent-template",
          "signature": "MkPersistSettings -\u003e Type",
          "source": "src/Database-Persist-TH.html#mpsBackend",
          "type": "function"
        },
        "index": {
          "description": "Which database backend we re using When generating data types each type is given generic version which works with any backend and type synonym for the commonly used backend This is where you specify that commonly used backend",
          "hierarchy": "Database Persist TH",
          "module": "Database.Persist.TH",
          "name": "mpsBackend",
          "normalized": "MkPersistSettings-\u003eType",
          "package": "persistent-template",
          "partial": "Backend",
          "signature": "MkPersistSettings-\u003eType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-template/docs/Database-Persist-TH.html#v:mpsBackend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate \u003ccode\u003eToJSON\u003c/code\u003e/\u003ccode\u003eFromJSON\u003c/code\u003e instances for each model types. If it's\n \u003ccode\u003eNothing\u003c/code\u003e, no instances will be generated. Default:\n\u003c/p\u003e\u003cpre\u003e\n  Just EntityJSON\n      { entityToJSON = 'keyValueEntityToJSON\n      , entityFromJSON = 'keyValueEntityFromJSON\n      }\n\u003c/pre\u003e",
          "module": "Database.Persist.TH",
          "name": "mpsEntityJSON",
          "package": "persistent-template",
          "signature": "MkPersistSettings -\u003e Maybe EntityJSON",
          "source": "src/Database-Persist-TH.html#mpsEntityJSON",
          "type": "function"
        },
        "index": {
          "description": "Generate ToJSON FromJSON instances for each model types If it Nothing no instances will be generated Default Just EntityJSON entityToJSON keyValueEntityToJSON entityFromJSON keyValueEntityFromJSON",
          "hierarchy": "Database Persist TH",
          "module": "Database.Persist.TH",
          "name": "mpsEntityJSON",
          "normalized": "MkPersistSettings-\u003eMaybe EntityJSON",
          "package": "persistent-template",
          "partial": "Entity JSON",
          "signature": "MkPersistSettings-\u003eMaybe EntityJSON",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-template/docs/Database-Persist-TH.html#v:mpsEntityJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstead of generating normal field accessors, generator lens-style accessors.\n\u003c/p\u003e\u003cp\u003eDefault: False\n\u003c/p\u003e\u003cp\u003eSince 1.3.1\n\u003c/p\u003e",
          "module": "Database.Persist.TH",
          "name": "mpsGenerateLenses",
          "package": "persistent-template",
          "signature": "MkPersistSettings -\u003e Bool",
          "source": "src/Database-Persist-TH.html#mpsGenerateLenses",
          "type": "function"
        },
        "index": {
          "description": "Instead of generating normal field accessors generator lens-style accessors Default False Since",
          "hierarchy": "Database Persist TH",
          "module": "Database.Persist.TH",
          "name": "mpsGenerateLenses",
          "normalized": "MkPersistSettings-\u003eBool",
          "package": "persistent-template",
          "partial": "Generate Lenses",
          "signature": "MkPersistSettings-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-template/docs/Database-Persist-TH.html#v:mpsGenerateLenses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate generic types that can be used with multiple backends. Good for\n reusable code, but makes error messages harder to understand. Default:\n True.\n\u003c/p\u003e",
          "module": "Database.Persist.TH",
          "name": "mpsGeneric",
          "package": "persistent-template",
          "signature": "MkPersistSettings -\u003e Bool",
          "source": "src/Database-Persist-TH.html#mpsGeneric",
          "type": "function"
        },
        "index": {
          "description": "Create generic types that can be used with multiple backends Good for reusable code but makes error messages harder to understand Default True",
          "hierarchy": "Database Persist TH",
          "module": "Database.Persist.TH",
          "name": "mpsGeneric",
          "normalized": "MkPersistSettings-\u003eBool",
          "package": "persistent-template",
          "partial": "Generic",
          "signature": "MkPersistSettings-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-template/docs/Database-Persist-TH.html#v:mpsGeneric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrefix field names with the model name. Default: True.\n\u003c/p\u003e",
          "module": "Database.Persist.TH",
          "name": "mpsPrefixFields",
          "package": "persistent-template",
          "signature": "MkPersistSettings -\u003e Bool",
          "source": "src/Database-Persist-TH.html#mpsPrefixFields",
          "type": "function"
        },
        "index": {
          "description": "Prefix field names with the model name Default True",
          "hierarchy": "Database Persist TH",
          "module": "Database.Persist.TH",
          "name": "mpsPrefixFields",
          "normalized": "MkPersistSettings-\u003eBool",
          "package": "persistent-template",
          "partial": "Prefix Fields",
          "signature": "MkPersistSettings-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-template/docs/Database-Persist-TH.html#v:mpsPrefixFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.TH",
          "name": "packPTH",
          "package": "persistent-template",
          "signature": "String -\u003e Text",
          "source": "src/Database-Persist-TH.html#packPTH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist TH",
          "module": "Database.Persist.TH",
          "name": "packPTH",
          "normalized": "String-\u003eText",
          "package": "persistent-template",
          "partial": "PTH",
          "signature": "String-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-template/docs/Database-Persist-TH.html#v:packPTH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eproduce code similar to the following:\n\u003c/p\u003e\u003cp\u003einstance PersistEntity e =\u003e PersistField e where\n    toPersistValue = PersistMap $ zip columNames (map toPersistValue . toPersistFields)\n    fromPersistValue (PersistMap o) = \n        let columns = HM.fromList x\n        in fromPersistValues $ map (name -\u003e\n          case HM.lookup name o of\n            Just v -\u003e\n              case fromPersistValue v of\n                Left e -\u003e error e\n                Right r -\u003e r\n            Nothing -\u003e error $ \u003ca\u003eMissing field: \u003c/a\u003e \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e unpack name) columnNames \n    fromPersistValue x = Left $ \u003ca\u003eExpected PersistMap, received: \u003c/a\u003e ++ show x\n    sqlType _ = SqlString\n\u003c/p\u003e",
          "module": "Database.Persist.TH",
          "name": "persistFieldFromEntity",
          "package": "persistent-template",
          "signature": "MkPersistSettings -\u003e EntityDef a -\u003e Q [Dec]",
          "source": "src/Database-Persist-TH.html#persistFieldFromEntity",
          "type": "function"
        },
        "index": {
          "description": "produce code similar to the following instance PersistEntity PersistField where toPersistValue PersistMap zip columNames map toPersistValue toPersistFields fromPersistValue PersistMap let columns HM.fromList in fromPersistValues map name case HM.lookup name of Just case fromPersistValue of Left error Right Nothing error Missing field mappend unpack name columnNames fromPersistValue Left Expected PersistMap received show sqlType SqlString",
          "hierarchy": "Database Persist TH",
          "module": "Database.Persist.TH",
          "name": "persistFieldFromEntity",
          "normalized": "MkPersistSettings-\u003eEntityDef a-\u003eQ[Dec]",
          "package": "persistent-template",
          "partial": "Field From Entity",
          "signature": "MkPersistSettings-\u003eEntityDef a-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-template/docs/Database-Persist-TH.html#v:persistFieldFromEntity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003epersistWith\u003c/a\u003e\u003c/code\u003e, but uses an external file instead of a\n quasiquotation.\n\u003c/p\u003e",
          "module": "Database.Persist.TH",
          "name": "persistFileWith",
          "package": "persistent-template",
          "signature": "PersistSettings -\u003e FilePath -\u003e Q Exp",
          "source": "src/Database-Persist-TH.html#persistFileWith",
          "type": "function"
        },
        "index": {
          "description": "Same as persistWith but uses an external file instead of quasiquotation",
          "hierarchy": "Database Persist TH",
          "module": "Database.Persist.TH",
          "name": "persistFileWith",
          "normalized": "PersistSettings-\u003eFilePath-\u003eQ Exp",
          "package": "persistent-template",
          "partial": "File With",
          "signature": "PersistSettings-\u003eFilePath-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-template/docs/Database-Persist-TH.html#v:persistFileWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply \u003ccode\u003e\u003ca\u003epersistWith\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003elowerCaseSettings\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.Persist.TH",
          "name": "persistLowerCase",
          "package": "persistent-template",
          "signature": "QuasiQuoter",
          "source": "src/Database-Persist-TH.html#persistLowerCase",
          "type": "function"
        },
        "index": {
          "description": "Apply persistWith to lowerCaseSettings",
          "hierarchy": "Database Persist TH",
          "module": "Database.Persist.TH",
          "name": "persistLowerCase",
          "package": "persistent-template",
          "partial": "Lower Case",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-template/docs/Database-Persist-TH.html#v:persistLowerCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply \u003ccode\u003e\u003ca\u003epersistWith\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eupperCaseSettings\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.Persist.TH",
          "name": "persistUpperCase",
          "package": "persistent-template",
          "signature": "QuasiQuoter",
          "source": "src/Database-Persist-TH.html#persistUpperCase",
          "type": "function"
        },
        "index": {
          "description": "Apply persistWith to upperCaseSettings",
          "hierarchy": "Database Persist TH",
          "module": "Database.Persist.TH",
          "name": "persistUpperCase",
          "package": "persistent-template",
          "partial": "Upper Case",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-template/docs/Database-Persist-TH.html#v:persistUpperCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a quasi-quoted syntax into a list of entity definitions, to be\n used as input to the template haskell generation code (mkPersist).\n\u003c/p\u003e",
          "module": "Database.Persist.TH",
          "name": "persistWith",
          "package": "persistent-template",
          "signature": "PersistSettings -\u003e QuasiQuoter",
          "source": "src/Database-Persist-TH.html#persistWith",
          "type": "function"
        },
        "index": {
          "description": "Converts quasi-quoted syntax into list of entity definitions to be used as input to the template haskell generation code mkPersist",
          "hierarchy": "Database Persist TH",
          "module": "Database.Persist.TH",
          "name": "persistWith",
          "normalized": "PersistSettings-\u003eQuasiQuoter",
          "package": "persistent-template",
          "partial": "With",
          "signature": "PersistSettings-\u003eQuasiQuoter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-template/docs/Database-Persist-TH.html#v:persistWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply the given list of functions to the same \u003ccode\u003eEntityDef\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eThis function is useful for cases such as:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eshare [mkSave \"myDefs\", mkPersist sqlSettings] [persistLowerCase|...|]\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e",
          "module": "Database.Persist.TH",
          "name": "share",
          "package": "persistent-template",
          "signature": "[[EntityDef a] -\u003e Q [Dec]] -\u003e [EntityDef a] -\u003e Q [Dec]",
          "source": "src/Database-Persist-TH.html#share",
          "type": "function"
        },
        "index": {
          "description": "Apply the given list of functions to the same EntityDef This function is useful for cases such as share mkSave myDefs mkPersist sqlSettings persistLowerCase",
          "hierarchy": "Database Persist TH",
          "module": "Database.Persist.TH",
          "name": "share",
          "normalized": "[[EntityDef a]-\u003eQ[Dec]]-\u003e[EntityDef a]-\u003eQ[Dec]",
          "package": "persistent-template",
          "signature": "[[EntityDef a]-\u003eQ[Dec]]-\u003e[EntityDef a]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-template/docs/Database-Persist-TH.html#v:share"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003esqlSettings\u003c/a\u003e\u003c/code\u003e, but set \u003ccode\u003e\u003ca\u003empsGeneric\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003eFalse\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 1.1.1\n\u003c/p\u003e",
          "module": "Database.Persist.TH",
          "name": "sqlOnlySettings",
          "package": "persistent-template",
          "signature": "MkPersistSettings",
          "source": "src/Database-Persist-TH.html#sqlOnlySettings",
          "type": "function"
        },
        "index": {
          "description": "Same as sqlSettings but set mpsGeneric to False Since",
          "hierarchy": "Database Persist TH",
          "module": "Database.Persist.TH",
          "name": "sqlOnlySettings",
          "package": "persistent-template",
          "partial": "Only Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-template/docs/Database-Persist-TH.html#v:sqlOnlySettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse the \u003ccode\u003eSqlPersist\u003c/code\u003e backend.\n\u003c/p\u003e",
          "module": "Database.Persist.TH",
          "name": "sqlSettings",
          "package": "persistent-template",
          "signature": "MkPersistSettings",
          "source": "src/Database-Persist-TH.html#sqlSettings",
          "type": "function"
        },
        "index": {
          "description": "Use the SqlPersist backend",
          "hierarchy": "Database Persist TH",
          "module": "Database.Persist.TH",
          "name": "sqlSettings",
          "package": "persistent-template",
          "partial": "Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-template/docs/Database-Persist-TH.html#v:sqlSettings"
      }
    }
  ]
]